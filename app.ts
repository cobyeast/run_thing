// @name: Deno Web-Api
// @auth: Coby G. Eastwood
// @vers: v.1.0.0
// @desc: Main app module
// @made: 07.28.2020

import { Application } from "https://deno.land/x/oak/mod.ts";
import runRoutes from "./routes.ts";

const port: any = Deno.env.get("PORT") || 9008;

const app = new Application();

// Register Middlewares
app.use(runRoutes.routes());
app.use(runRoutes.allowedMethods());

app.use(async (ctx, next) => {
  console.log("Middleware...");
  await next();
});

console.log(`Server running on port ${port}`);

await app.listen({ port });
