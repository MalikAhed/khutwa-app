import { DatabaseSync } from "node:sqlite";
import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createAccountStore } from "../src/server/account-store.mjs";
import { normalizeUsername, validateAccountField } from "../src/domain/account.js";

// This is a local operator command. Public registration never sets staff roles.
export async function provisionOwner({databasePath,username,password}) {
  await access(databasePath);
  if(validateAccountField("username",username))throw new Error("Invalid owner username.");
  const store=createAccountStore({databasePath});
  try {
    if(password!==undefined) {
      if(validateAccountField("password",password))throw new Error("Invalid owner password.");
      const result=await store.createAccount({username,password,curriculum:"gaza",path:"scientific"});
      if(result.status!=="created")throw new Error("This account already exists. Use grant to promote it without changing its password.");
    }
    const database=new DatabaseSync(databasePath);
    try {
      const result=database.prepare("UPDATE accounts SET staff_role='owner' WHERE username_normalized=?").run(normalizeUsername(username));
      if(result.changes!==1)throw new Error("Register the account first, or use create.");
    }finally{database.close();}
  }finally{store.close();}
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const [action,username,databasePath="data/accounts.sqlite"]=process.argv.slice(2);
  if(!["create","grant"].includes(action)||!username)throw new Error("Usage: owner-account.mjs create|grant USERNAME [DATABASE]. Create reads a password from standard input.");
  let password;
  if(action==="create") {
    const chunks=[];
    for await(const chunk of process.stdin)chunks.push(chunk);
    password=Buffer.concat(chunks).toString("utf8").replace(/\r?\n$/,"");
  }
  await provisionOwner({databasePath,username,...(password!==undefined?{password}:{})});
  console.log("Owner access enabled. Sign in and open /students.");
}
