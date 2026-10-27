import test from 'node:test';
import assert from 'node:assert/strict';
import {subscriptionExpiry,effectiveAccountType,validateStudentChange} from '../src/domain/subscriptions.js';

test('calendar subscriptions clamp month ends and expire at the exact boundary',()=>{
  assert.equal(subscriptionExpiry('month',null,new Date('2024-01-31T12:00:00Z')),'2024-02-29T12:00:00.000Z');
  assert.equal(subscriptionExpiry('year',null,new Date('2024-02-29T12:00:00Z')),'2025-02-28T12:00:00.000Z');
  const now=Date.parse('2026-10-27T12:00:00Z');
  const account={account_type:'subscribed',subscription_expires_at:new Date(now).toISOString()};
  assert.equal(effectiveAccountType(account,now-1),'subscribed');
  assert.equal(effectiveAccountType(account,now),'free');
  assert.equal(effectiveAccountType({...account,subscription_expires_at:null},now),'subscribed');
  assert.equal(effectiveAccountType({...account,access_disabled:1},now),'banned');
});
test('admin changes reject privilege fields, invalid versions and expired custom grants',()=>{
  assert.throws(()=>validateStudentChange({action:'grant',duration:'permanent',version:0,isOwner:true}));
  assert.throws(()=>validateStudentChange({action:'delete',version:0}));
  assert.throws(()=>validateStudentChange({action:'revoke',version:-1}));
  assert.throws(()=>validateStudentChange({action:'grant',version:0,duration:'custom',expiresAt:'2020-01-01'}));
  assert.equal(validateStudentChange({action:'grant',version:0,duration:'permanent'}).expiresAt,null);
});
