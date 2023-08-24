// eslint-disable-next-line max-classes-per-file
declare module gb2260 {
  export class GB2260 {
    constructor(revision?:string, data?:any[]);
    get(code);
  }

  export class Division {
    constructor(code:string, name:string, revision:string);
    get(code);
  }

  export function register(revision: string, data:any[]);
  export const revisions:string[];
}
