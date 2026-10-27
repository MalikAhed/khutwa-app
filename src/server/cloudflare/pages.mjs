// Pages invokes this only for the API and protected admin routes. Keeping the
// original URL preserves same-origin validation and host-only session cookies.
export default {
  async fetch(request, env) {
    try {
      return await env.BACKEND.fetch(request);
    } catch {
      return Response.json({ error:"تعذّر الاتصال بالخدمة. حاول مجددًا." }, {
        status:503, headers:{ "Cache-Control":"no-store", "X-Content-Type-Options":"nosniff" },
      });
    }
  },
};
