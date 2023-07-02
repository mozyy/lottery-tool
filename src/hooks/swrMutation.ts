import { AxiosPromise } from 'axios';
import useSWRMutationHook, { SWRMutationResponse } from 'swr/mutation';

export function useSWRMutation<
  H extends (...body: any)=> AxiosPromise<any>,
  B extends Parameters<H>,
  R extends H extends (...body: any)=> AxiosPromise<infer U> ? U : never,
>(
  key: [H] | (()=>[H] | false)):SWRMutationResponse<R, any, any, B> {
  const res = useSWRMutationHook(key, undefined as any);
  return res as any;
}
