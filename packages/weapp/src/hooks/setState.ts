import { useCallback, useReducer } from 'react';

enum ActionEnum {
  SET_FIELDS,
  SET_ALL_FIELDS,
}

interface SetStateAction<S> {
  type: ActionEnum
  value: Partial<S>
}

const inputFieldReducer = <S>(state:S, action:SetStateAction<S>):S => {
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
export const setAllFieldsAction = <S>(value:S) => ({
  type: ActionEnum.SET_ALL_FIELDS,
  value,
});
// 更新部分字段
export const setFieldsAction = <S>(value:S) => ({
  type: ActionEnum.SET_FIELDS,
  value,
});

export interface SetState<S = Object> {
  <K extends keyof S>(key: K):(value: S[K])=>void
  <K extends keyof S>(obj: Pick<S, K>): void
}
export interface SetAllState<S = Object> {
  (value:S):void
}

/**
 * useMergeState
 * @param setStateHandler setStateHandler
 * @returns mergeState
 */
export const useSetStateHandler = <S = Object>(setStateHandler:
(updater: ((currVal: S) => S)) => void) => {
  const setState:SetState<NonNullable<S>> = useCallback((value:any): any => {
    if (typeof value === 'string') {
      return (v:unknown) => setStateHandler((p) => ({ ...p, [value]: v }));
    }
    if (!value) {
      return setStateHandler(() => value);
    }
    return setStateHandler((p) => ({ ...p, ...value }));
  }, [setStateHandler]);

  return setState;
};

/**
 * useSetState
 * @param initialState state
 * @returns [state, setState, setAllState]
 */
export const useSetState = <S = Object>(initialState:S) => {
  const [state, dispatch] = useReducer<React.Reducer<S, SetStateAction<S>>>(
    inputFieldReducer,
    initialState,
  );
  const setState:SetState<S> = useCallback((value:any): any => {
    if (typeof value === 'string') {
      return (v:unknown) => dispatch(setFieldsAction({ [value]: v } as Partial<S>));
    }
    return dispatch(setFieldsAction(value as any));
  }, []);
  const setAllState:SetAllState<S> = (value:S) => dispatch(setAllFieldsAction(value));

  return [state, setState, setAllState] as const;
};
