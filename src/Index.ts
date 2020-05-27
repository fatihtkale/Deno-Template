import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  console.log(`${ctx.request.method} | ${ctx.request.url}`);
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
