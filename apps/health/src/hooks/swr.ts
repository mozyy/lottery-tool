import { AxiosPromise } from 'axios';
import React from 'react';
import useSWRHook, { SWRResponse } from 'swr';

interface ResponseResult<R> extends SWRResponse<R> {
  result: React.ReactElement
}
interface ResponseData<R> extends SWRResponse<R> {
  data: R
  result: false
}

type Response<R> = ResponseResult<R> | ResponseData<R>;

export function useSWR<
  H extends (...body: any)=> AxiosPromise<any>,
  B extends Parameters<H>,
  R extends H extends (...body: any)=> AxiosPromise<infer U> ? U : never,
>(
  key: [H, ...B] | (()=>[H, ...B] | false)):Response<R> {
  const res = useSWRHook(key);
  return res as any;
}
