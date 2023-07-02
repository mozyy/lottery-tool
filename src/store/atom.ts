import { AtomEffect, DefaultValue, atom } from 'recoil';
import { OauthToken as OauthTokenModel } from '../openapi/lottery/user';
import { getStorage, removeStorage, setStorage } from '../utils/storage';

export class OauthToken {
  private expires: number;

  constructor(public model: OauthTokenModel) {
    this.expires = Date.now() + this.model.expiresIn! * 1000;
  }

  static expired(token: OauthToken) {
    return Date.now() > token.expires;
  }
}

let auth:OauthToken | null = null;

export const getAccessToken = () => {
  if (!auth || OauthToken.expired(auth)) {
    return '';
  }
  return auth.model.accessToken || '';
};

const localStorageEffect:AtomEffect<OauthToken | null> = ({ setSelf, onSet }) => {
  const oauthInfo = getStorage<OauthToken>('OAUTH_INFO');
  if (oauthInfo) {
    setSelf(oauthInfo);
  }

  onSet((newValue) => {
    if (newValue instanceof DefaultValue || !newValue) {
      auth = null;
      removeStorage('OAUTH_INFO');
    } else {
      auth = newValue;
      setStorage('OAUTH_INFO', newValue);
    }
  });
};

export const oauthTokenState = atom<OauthToken | null>({
  key: 'oauthTokenState',
  default: null,
  effects: [
    localStorageEffect,
  ],
});
