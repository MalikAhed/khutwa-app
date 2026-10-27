// Keep accounts, sessions, progress, and admin access in the existing backend.
export default {
  fetch(request, env) {
    const pathname = new URL(request.url).pathname;
    if (pathname.startsWith('/api/') || pathname === '/students') {
      if (!env.BACKEND) {
        return Response.json({ status:'unavailable' }, { status:503, headers:{ 'Cache-Control':'no-store' } });
      }
      return env.BACKEND.fetch(request);
    }
    return env.ASSETS.fetch(request);
  },
};
