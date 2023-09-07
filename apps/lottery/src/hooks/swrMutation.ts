import { showToast } from '@tarojs/taro';
import { AxiosPromise } from 'axios';
import { useCallback } from 'react';
import useSWRMutationHook, { SWRMutationResponse } from 'swr/mutation';

export function useSWRMutation<
  H extends (...body: any)=> AxiosPromise<any>,
  B extends Parameters<H>,
  R extends H extends (...body: any)=> AxiosPromise<infer U> ? U : never,
>(
  key: [H] | (()=>[H] | false)):SWRMutationResponse<R, any, any, B> {
  const { trigger: originTrigger, ...res } = useSWRMutationHook(key, undefined as any);
  console.log(3333, originTrigger, res);
  const trigger = useCallback((...args) => originTrigger(...args).then((resp) => {
    console.log(4444, resp);
    return resp;
  }).catch((err) => {
    let message = err.response?.headers['grpc-message'];
    if (message) {
      message = decodeURIComponent(message);
    } else {
      message = err.message;
    }
    showToast({ icon: 'error', title: message });
    return Promise.reject(err);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [originTrigger]);
  return { ...res, trigger } as any;
}
