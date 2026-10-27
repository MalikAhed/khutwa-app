import { bindings, defineConfig, exports } from "cf/config";

export default defineConfig(({ mode }) => {
  const name = mode === "production" ? "khutwa-app" : "khutwa-app-staging";
  return {
    accountId:process.env.CLOUDFLARE_ACCOUNT_ID || "f6200f8f16ec1abc5f7fb7768f2ffd7f",
    worker:{
      name,
      entrypoint:"src/server/cloudflare/worker.mjs",
      compatibilityDate:"2026-10-27",
      compatibilityFlags:["nodejs_compat"],
      assets:{ htmlHandling:"auto-trailing-slash",notFoundHandling:"none",runWorkerFirst:["/api/*","/students*","/admin*"] },
      triggers:[{type:"scheduled",schedule:"17 * * * *"}],
      observability:{ enabled:true,headSamplingRate:0.1,traces:{ enabled:true,headSamplingRate:0.1 } },
      exports:{ Authentication:exports.durableObject({ storage:"sqlite" }), StudentProgress:exports.durableObject({ storage:"sqlite" }) },
      env:{
        ASSETS:bindings.assets(),
        ACCOUNTS:bindings.d1({ name:`${name}-accounts`,id:process.env.KHUTWA_D1_ID || (mode === "production" ? "5de0d401-a288-484f-868a-cd5333e7df06" : "fb38d157-5217-4fec-8a35-8e7ddcec8059") }),
        AUTH:bindings.durableObject({ worker:name,exportName:"Authentication" }),
        STUDENTS:bindings.durableObject({ worker:name,exportName:"StudentProgress" }),
      },
    },
  };
});
