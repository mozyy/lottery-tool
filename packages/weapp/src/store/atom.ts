import { AuthToken } from '@zyy/common/src/model/authToken';
import { atom, AtomEffect, DefaultValue } from 'recoil';
import { getStorage, removeStorage, setStorage } from '../utils/storage';

let auth:AuthToken | null = null;

export const setOauthToken = (value:AuthToken | null) => {
  auth = value;
};
export const getAccessToken = () => {
  if (!auth || auth.expired()) {
    return '';
  }
  return auth.model.accessToken || '';
};

const localStorageEffect:AtomEffect<AuthToken | null> = ({ setSelf, onSet }) => {
  const authInfo = getStorage<AuthToken>('AUTH_INFO');
  if (authInfo) {
    const token = AuthToken.restore(authInfo);
    setOauthToken(token);
    setSelf(token);
  }

  onSet((newValue) => {
    if (newValue instanceof DefaultValue || !newValue) {
      setOauthToken(null);
      removeStorage('AUTH_INFO');
    } else {
      setOauthToken(newValue);
      setStorage('AUTH_INFO', newValue);
    }
  });
};

export const authTokenState = atom<AuthToken | null>({
  key: 'authTokenState',
  default: null,
  effects: [
    localStorageEffect,
  ],
});
