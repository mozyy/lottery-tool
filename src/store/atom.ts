import { AtomEffect, DefaultValue, atom } from 'recoil';
import { OauthToken } from '../openapi/lottery/user';
import { getStorage, removeStorage, setStorage } from '../utils/storage';

const localStorageEffect:AtomEffect<OauthToken | null> = ({ setSelf, onSet }) => {
  const oauthInfo = getStorage<OauthToken>('OAUTH_INFO');
  console.log(55555, oauthInfo);
  if (oauthInfo) {
    setSelf(oauthInfo);
  }

  onSet((newValue) => {
    if (newValue instanceof DefaultValue || !newValue) {
      removeStorage('OAUTH_INFO');
    } else {
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
