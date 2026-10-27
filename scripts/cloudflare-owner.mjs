import {randomBytes,scryptSync} from 'node:crypto';
import {mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {normalizeUsername,validateAccountField} from '../src/domain/account-fields.js';

const [action,username]=process.argv.slice(2);
if (!['create','grant'].includes(action) || validateAccountField('username',username))
  throw new Error('Usage: node scripts/cloudflare-owner.mjs create|grant USERNAME [--production]. Create reads the password from stdin.');
const production=process.argv.includes('--production');
const database=production?'5de0d401-a288-484f-868a-cd5333e7df06':'fb38d157-5217-4fec-8a35-8e7ddcec8059';
const normalized=normalizeUsername(username);
let batch;
if (action==='create') {
  if(process.stdin.isTTY) throw new Error('Pipe a password from a secret manager or a hidden shell prompt. Passwords must not be passed as arguments.');
  let password='';for await(const chunk of process.stdin)password+=chunk;
  password=password.replace(/\r?\n$/,'');
  if(validateAccountField('password',password))throw new Error('The password does not meet the account password requirements.');
  const salt=randomBytes(16).toString('base64url');
  const hash=scryptSync(password,salt,64).toString('base64url');password='';
  batch=[{sql:"INSERT INTO accounts(username,username_normalized,curriculum,path,password_hash,password_salt,account_type,staff_role,created_at) VALUES(?,?,'gaza','scientific',?,?,'subscribed','owner',?)",params:[username.trim(),normalized,hash,salt,new Date().toISOString()]},
    {sql:"INSERT INTO account_identifiers(alias,account_id,kind) SELECT ?,id,'username' FROM accounts WHERE username_normalized=?",params:[normalized,normalized]}];
} else batch=[{sql:"UPDATE accounts SET staff_role='owner' WHERE username_normalized=? AND access_disabled=0 AND account_type!='banned'",params:[normalized]}];
batch.push({sql:"SELECT username,staff_role FROM accounts WHERE username_normalized=? AND staff_role='owner'",params:[normalized]});
const directory=await mkdtemp(path.join(tmpdir(),'khutwa-owner-'));
try {
  const file=path.join(directory,'batch.json');
  await writeFile(file,JSON.stringify(batch),{mode:0o600});
  const result=await new Promise((resolve,reject)=>{
    const child=spawn(process.execPath,['node_modules/cf/bin/cf','d1','raw',database,'--batch',`@${file}`],{env:{...process.env,CLOUDFLARE_ACCOUNT_ID:'f6200f8f16ec1abc5f7fb7768f2ffd7f'},stdio:['ignore','pipe','pipe']});
    let output='';child.stdout.on('data',chunk=>output+=chunk);
    // API error output can include SQL parameters. Keep it private.
    child.stderr.resume();child.on('error',reject);child.on('exit',code=>code===0?resolve(output):reject(new Error('Owner provisioning failed. Verify CLI authorization, migrations and username uniqueness; credentials were not logged.')));
  });
  const responses=JSON.parse(String(result));
  if(!JSON.stringify(responses).includes('owner'))throw new Error('No matching owner account was created or promoted.');
  console.log(`Owner account verified in ${production?'production':'staging'}: ${username}`);
} finally {await rm(directory,{recursive:true,force:true});}
