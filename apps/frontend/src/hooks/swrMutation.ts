import { useCallback } from 'react';
import useSWRMutationHook, { SWRMutationResponse } from 'swr/mutation';

export function useSWRMutation<
  H extends (...body: any)=> Promise<any>,
  B extends Parameters<H>,
  R extends H extends (...body: any)=> Promise<infer U> ? U : never,
>(
  key: [H] | (()=>[H] | false)):SWRMutationResponse<R, any, any, B> {
  const res = useSWRMutationHook(key, undefined as any);
  const trigger = useCallback((...args) => res.trigger(...args).catch((err) => {
    let message = err.response?.headers['grpc-message'];
    if (message) {
      message = decodeURIComponent(message);
    } else {
      message = err.message;
    }
    console.log('error: ', message);
    return Promise.reject(err);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [res.trigger]);
  return { ...res, trigger };
}
