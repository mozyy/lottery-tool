import {
  clearStorageSync, getStorageSync, removeStorageSync, setStorageSync,
} from '@tarojs/taro';
import { decryptAES, encryptAES } from './crypto';

const storagePrefix = 'LOTTERY_';
const storageKeys = {
  OAUTH_INFO: 'OAUTH_INFO',
};

type Key = keyof typeof storageKeys;

export function getStorage<T>(key: Key) {
  const keyValue = encryptAES(`${storagePrefix}${key}`);
  const value = getStorageSync(keyValue);
  if (!value) {
    return null;
  }
  return JSON.parse(decryptAES(value)) as T;
}

export function setStorage<T=any>(key: Key, data: T) {
  const keyValue = encryptAES(`${storagePrefix}${key}`);
  const value = encryptAES(JSON.stringify(data));
  setStorageSync(keyValue, value);
}

export function removeStorage(key: Key) {
  const keyValue = encryptAES(`${storagePrefix}${key}`);
  removeStorageSync(keyValue);
}

export function clearStorage() {
  clearStorageSync();
}
