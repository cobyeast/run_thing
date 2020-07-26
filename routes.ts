// @desc: router for app.ts, applies controllers in controllers/running.ts to all server endpoints
// @made: 07.28.2020

import { Router } from "https://deno.land/x/oak/mod.ts";

import {
  getRuns,
  postRuns,
  putRuns,
  delRuns,
} from "./controllers/running.ts";

const router = new Router();

router
  .get("/api/runs", getRuns)
  .post("/api/runs", postRuns)
  .put("/api/runs/:id", putRuns) // uses custom :id paramter
  .delete("/api/runs/:id", delRuns);

export default router;
