import { AxiosPromise } from 'axios';
import useSWRHook, { SWRResponse } from 'swr';

export function useSWR<
  H extends (...body: any)=> AxiosPromise<any>,
  B extends Parameters<H>,
  R extends H extends (...body: any)=> AxiosPromise<infer U> ? U : never,
>(
  key: [H, ...B] | (()=>[H, ...B] | false)):SWRResponse<R> {
  const res = useSWRHook(key);
  return res;
}
