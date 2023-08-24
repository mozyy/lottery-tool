'use client';

import { useCallback, useReducer } from 'react';

enum ActionEnum {
  SET_FIELDS,
  SET_ALL_FIELDS,
}

interface SetStateAction {
  type: ActionEnum
  value: Record<string, any>
}

const inputFieldReducer = <S>(state:S, action:SetStateAction):S => {
  switch (action.type) {
    case ActionEnum.SET_FIELDS:
      return { ...state, ...action.value };
    case ActionEnum.SET_ALL_FIELDS:
      return { ...action.value } as S;
    default:
      return state;
  }
};

// 所有字段替换
export const setAllFieldsAction = <S extends Record<string, any>>(value:S) => ({
  type: ActionEnum.SET_ALL_FIELDS,
  value,
});
// 更新部分字段
export const setFieldsAction = <S extends Record<string, any>>(value:S) => ({
  type: ActionEnum.SET_FIELDS,
  value,
});

export interface SetState<S extends Record<string, any> = Record<string, any>> {
  <K extends keyof S>(key: K):(value: S[K])=>void
  <K extends keyof S>(obj: Pick<S, K>): void
}
export interface SetAllState<S extends Record<string, any> = Record<string, any>> {
  (value:S):void
}

/**
 * useSetState
 * @param initialState state
 * @returns [state, setState, setAllState]
 */
export const useSetState = <S extends Record<string, any>>(initialState:S) => {
  const [state, dispatch] = useReducer<React.Reducer<S, SetStateAction>>(
    inputFieldReducer,
    initialState,
  );
  const setState:SetState<S> = useCallback((value:any): any => {
    if (typeof value === 'string') {
      return (v:unknown) => dispatch(setFieldsAction({ [value]: v }));
    }
    return dispatch(setFieldsAction(value as any));
  }, []);
  const setAllState:SetAllState<S> = (value:S) => dispatch(setAllFieldsAction(value));

  return [state, setState, setAllState] as const;
};
