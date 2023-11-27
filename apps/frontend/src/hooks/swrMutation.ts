import useSWRMutationHook, { SWRMutationResponse } from 'swr/mutation';
import { swrFetcher, swrMiddleware } from '../utils/request';

export function useSWRMutation<
C extends Object,
K extends keyof C,
H extends C[K] extends (...body: any)=> Promise<any> ? C[K] : never,
  B extends Parameters<H>,
  R extends H extends (...body: any)=> Promise<infer U> ? U : never,
>(
  key: [C, K] | (()=>[C, K] | false)):SWRMutationResponse<R, any, any, B> {
  const res = useSWRMutationHook(key, swrFetcher, { use: [swrMiddleware] } as any);
  return res as any;
}
