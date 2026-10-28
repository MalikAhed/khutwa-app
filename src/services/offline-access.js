// A reconnect lease, not a tamper-proof clock: browsers cannot measure time
// spent closed independently of the device clock. No progress is stored here.
export const OFFLINE_ACCESS_KEY = 'tawjihi:offline-access:v1';
export const OFFLINE_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;
const CLOCK_TOLERANCE_MS = 2 * 60 * 1000;

/** @param {{storage?:Pick<Storage,"getItem"|"setItem">|null, wallNow?:()=>number, monotonicNow?:()=>number}} [options] */
export function createOfflineAccess({ storage, wallNow = Date.now, monotonicNow = () => performance.now() } = {}) {
  let anchor = null;
  const read = () => {
    try {
      const value = JSON.parse(storage?.getItem(OFFLINE_ACCESS_KEY) || 'null');
      return value?.version === 1 && value.account?.id &&
        ['verifiedAt','expiresAt','lastWall','elapsed'].every(key => Number.isFinite(value[key]))
        && value.elapsed >= 0 && value.expiresAt <= value.verifiedAt + OFFLINE_WINDOW_MS ? value : null;
    } catch { return null; }
  };
  const save = value => { try { storage?.setItem(OFFLINE_ACCESS_KEY, JSON.stringify(value)); return Boolean(storage); } catch { return false; } };
  const inspect = () => {
    const value = read();
    if (!value) return { allowed:false, reason:'unverified', now:wallNow() };
    const previousElapsed = value.elapsed, wasBlocked = value.blocked;
    const wall = wallNow(), mono = monotonicNow();
    if (!anchor || anchor.verifiedAt !== value.verifiedAt || anchor.id !== value.account.id)
      anchor = { verifiedAt:value.verifiedAt, id:value.account.id, mono, elapsed:value.elapsed };
    if (wall < value.lastWall - CLOCK_TOLERANCE_MS) value.blocked = true;
    value.elapsed = Math.max(value.elapsed + Math.max(0, wall - value.lastWall), anchor.elapsed + Math.max(0, mono - anchor.mono));
    value.lastWall = Math.max(value.lastWall, wall);
    const now = value.verifiedAt + value.elapsed;
    if (now >= value.expiresAt) value.blocked = true;
    // Avoid storage-event ping-pong between open tabs and needless disk writes.
    const durable = value.blocked !== wasBlocked || value.elapsed - previousElapsed >= 1000 ? save(value) : true;
    return { allowed:durable && !value.blocked, reason:value.blocked ? 'reconnect' : durable ? 'valid' : 'storage', now, expiresAt:value.expiresAt, account:value.account };
  };
  return {
    inspect,
    verify(account, serverTime) {
      if (!Number.isFinite(serverTime)) return false;
      const expires = [account.accessExpiresAt, account.subscriptionExpiresAt].filter(Boolean)
        .map(value => typeof value === 'number' ? value : Date.parse(value)).filter(Number.isFinite);
      // Persist only the minimal profile; never passwords, cookies or tokens.
      const profile = Object.fromEntries(['id','username','displayName','accountType','curriculum','path']
        .filter(key => Object.hasOwn(account,key)).map(key => [key,account[key]]));
      anchor = null;
      return save({ version:1, account:profile, verifiedAt:serverTime,
        expiresAt:Math.min(serverTime + OFFLINE_WINDOW_MS, ...expires), lastWall:wallNow(), elapsed:0, blocked:false });
    },
    revoke() {
      const value = read();
      if (value) save({ ...value, blocked:true });
      anchor = null;
    },
  };
}
