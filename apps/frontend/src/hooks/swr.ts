import useSWRHook, { SWRResponse } from 'swr';
import { swrFetcher, swrMiddleware } from '../utils/request';

interface Response<R> extends SWRResponse<R> {
  data: R
}

export function useSWR<
  C extends Object,
  K extends keyof C,
  H extends C[K] extends (...body: any)=> Promise<any> ? C[K] : never,
  B extends Parameters<H>,
  R extends H extends (...body: any)=> Promise<infer U> ? U : never,
>(key: [C, K, ...B] | (()=>[C, K, ...B] | false)):Response<R> {
  const res = useSWRHook(key, swrFetcher, { use: [swrMiddleware] });
  return res as any;
}
