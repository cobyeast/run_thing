// @desc: crud (create, read, update, delete) controllers, activated in routes.ts
// @made: 07.28.2020

import asynchandler from "../middlewares/async.ts";

export const getRuns = asynchandler(({ response }) => {
  response.body = {
    "success": true,
    "msg": "Hello World!",
  };
});

export const postRuns = asynchandler(({ request, response }) => {
  const { id, duration, description, type } = request.body();

  response.body = { id, duration, description, type };
});

export const putRuns = asynchandler(({ request, response }) => {
  const { id, duration, description, type } = request.body();

  response.body = { id, duration, description, type };
});

export const delRuns = asynchandler(({ request, response }) => {
  response.body = {};
});
