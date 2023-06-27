import { AtomEffect, atom } from 'recoil';
import { OauthToken } from '../openapi/lottery/user';

const localStorageEffect:AtomEffect<OauthToken | null> = ({ setSelf, onSet }) => {
  const savedValue = getStorage('USER_INFO', 'localStorage');
  if (savedValue != null) {
    const userInfo:UserInfo = JSON.parse(savedValue);
    setSelf(userInfo);
  }

  onSet((newValue) => {
    if (newValue instanceof DefaultValue || !newValue) {
      removeStorage('USER_INFO', 'localStorage');
    } else {
      setStorage('USER_INFO', JSON.stringify(newValue), 'localStorage');
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
