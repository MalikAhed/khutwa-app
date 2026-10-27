import { applySecurityHeaders } from "../security-headers.mjs";

// Keep the existing, tested HTTP validation for Node and Workers alike.
export async function handleNodeApi(request, handler) {
  const headers = Object.fromEntries(request.headers);
  headers.host = new URL(request.url).host;
  const input = { url:request.url,method:request.method, headers,
    socket:{ encrypted:new URL(request.url).protocol === "https:", remoteAddress:headers["cf-connecting-ip"] || "local" },
    async *[Symbol.asyncIterator]() { if (request.body) for await (const chunk of request.body) yield chunk; },
  };
  let status = 200, body = null;
  const responseHeaders = new Headers();
  const output = {
    setHeader(name,value) { responseHeaders.set(name,value); },
    writeHead(code, extra = {}) { status = code; for (const [name,value] of Object.entries(extra)) responseHeaders.set(name,value); return output; },
    end(value) { body = value ?? null; return output; },
  };
  applySecurityHeaders(output);
  responseHeaders.set("Cache-Control","no-store");
  try { await handler(input,output,new URL(request.url).pathname); }
  catch (error) {
    status = error.code === "ETOOBIG" ? 413 : error instanceof SyntaxError ? 400 : 500;
    responseHeaders.set("Content-Type","application/json; charset=utf-8");
    body = JSON.stringify({ status:"unavailable",error:"تعذّر إكمال الطلب. حاول مجددًا." });
    // Never log request bodies, cookies, passwords, or student identifiers.
    console.error("API request failed", { status, path:new URL(request.url).pathname });
  }
  return new Response(body,{ status,headers:responseHeaders });
}
