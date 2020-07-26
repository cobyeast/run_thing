// @desc: ts types that describe all objects — similar to mongoose or postgres schemas
// @made: 07.28.2020

export interface RunObj {
  id: number;
  duration: number;
  description: string;
  type: string;
}

export interface ctxObj {
  request: any;
  response: any;
}
