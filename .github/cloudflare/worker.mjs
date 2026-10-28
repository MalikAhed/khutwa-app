// Packaging embeds the shared dashboard layout. The existing backend remains
// the only authority for owner access, accounts, sessions and student progress.
export function createPagesWorker(dashboardHtml) {
  return { async fetch(request, env) {
    const pathname = new URL(request.url).pathname;
    if (pathname.startsWith('/api/') || pathname === '/students') {
      if (!env.BACKEND) {
        return Response.json({ status:'unavailable' }, { status:503, headers:{ 'Cache-Control':'no-store' } });
      }
      const response = await env.BACKEND.fetch(request);
      if (pathname !== '/students' || request.method !== 'GET' || response.status !== 200) return response;
      if (!dashboardHtml || !response.headers.get('content-type')?.includes('text/html')) {
        return Response.json({ status:'unavailable' }, {status:503, headers:{'Cache-Control':'no-store'}});
      }
      void response.body?.cancel();
      const headers = new Headers(response.headers);
      headers.set('Content-Type', 'text/html; charset=utf-8');
      headers.set('Cache-Control', 'no-store');
      headers.delete('Content-Length');
      headers.delete('Content-Encoding');
      headers.delete('ETag');
      return new Response(dashboardHtml, {status:200, headers});
    }
    return env.ASSETS.fetch(request);
  },
  };
}

export default createPagesWorker();
