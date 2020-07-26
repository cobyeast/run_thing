// @desc: middleware function, that handles all incoming async requests
// @made: 07.28.2020

import { ctxObj } from "../types.ts";

const asynchandler = (func: ({ request, response }: ctxObj) => void) =>
  (
    ctx: any,
    next: Function,
  ) =>
    Promise
      .resolve(func(ctx))
      .catch(next());

export default asynchandler;
