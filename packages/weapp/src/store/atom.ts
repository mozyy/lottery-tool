import { AuthauthUser, AuthToken as AuthTokenModel } from '@zyy/openapi/src/axios/wx/user';
import { atom, AtomEffect, DefaultValue } from 'recoil';
import { getStorage, removeStorage, setStorage } from '../utils/storage';

export class AuthToken {
  private expires: number;

  constructor(public model: AuthTokenModel, private user: AuthauthUser) {
    this.expires = Date.now() + this.model.expiresIn! * 1000;
  }

  static expired(token: AuthToken) {
    return Date.now() > token.expires;
  }

  static restore(token: AuthToken) {
    const newToken = new AuthToken(token.model, token.user);
    newToken.expires = token.expires;
    return newToken;
  }

  get userId() {
    return this.user?.id;
  }
}

let auth:AuthToken | null = null;

export const setOauthToken = (value:AuthToken | null) => {
  auth = value;
};
export const getAccessToken = () => {
  if (!auth || AuthToken.expired(auth)) {
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
