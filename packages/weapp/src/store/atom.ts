import { OauthToken as OauthTokenModel, OauthoauthUser } from '@zyy/openapi/src/axios/wx/user';
import { AtomEffect, DefaultValue, atom } from 'recoil';
import { getStorage, removeStorage, setStorage } from '../utils/storage';

export class OauthToken {
  private expires: number;

  constructor(public model: OauthTokenModel, private user: OauthoauthUser) {
    this.expires = Date.now() + this.model.expiresIn! * 1000;
  }

  static expired(token: OauthToken) {
    return Date.now() > token.expires;
  }

  static restore(token: OauthToken) {
    const newToken = new OauthToken(token.model, token.user);
    newToken.expires = token.expires;
    return newToken;
  }

  get userId() {
    return this.user?.id;
  }
}

let auth:OauthToken | null = null;

export const setOauthToken = (value:OauthToken | null) => {
  auth = value;
};
export const getAccessToken = () => {
  if (!auth || OauthToken.expired(auth)) {
    return '';
  }
  return auth.model.accessToken || '';
};

const localStorageEffect:AtomEffect<OauthToken | null> = ({ setSelf, onSet }) => {
  const oauthInfo = getStorage<OauthToken>('OAUTH_INFO');
  if (oauthInfo) {
    const oauth = OauthToken.restore(oauthInfo);
    setOauthToken(oauth);
    setSelf(oauth);
  }

  onSet((newValue) => {
    if (newValue instanceof DefaultValue || !newValue) {
      setOauthToken(null);
      removeStorage('OAUTH_INFO');
    } else {
      setOauthToken(newValue);
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
