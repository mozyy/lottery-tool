import CryptoJs from 'crypto-js';
import { iv as ivStr, key as keyStr, salt as saltStr } from '../env';

const key = CryptoJs.enc.Utf8.parse(keyStr);
const iv = CryptoJs.enc.Utf8.parse(ivStr);
const salt = CryptoJs.enc.Utf8.parse(saltStr);

/**
 * AES加密
 */
export function encryptAES(message: string) {
  const encryptResult = CryptoJs.AES.encrypt(message, key, {
    iv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7,
  }).toString();
  return encryptResult;
}
/**
 * 解密
 */
export function decryptAES(message: string) {
  const bytes = CryptoJs.AES.decrypt(message.toString(), key, {
    iv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7,
  });
  return bytes.toString(CryptoJs.enc.Utf8);
}

/**
 * SHA256加密
 */
export function encryptSHA(message: string) {
  return CryptoJs.SHA256(message).toString();
}

/**
 * Base64转码
 */
export function encryptBase64(message: string) {
  const str = CryptoJs.enc.Utf8.parse(message);
  return CryptoJs.enc.Base64.stringify(str);
}

/**
 * Base64解码
 */
export function decryptBase64(message: string) {
  const str = CryptoJs.enc.Base64.parse(message);
  return str.toString(CryptoJs.enc.Utf8);
}

/**
 * PBKDF2加密密码
 * @param password 密码
 * @returns 加密后字符串
 */
export const encryptPassword = (password: string) => {
  const val = CryptoJs.PBKDF2(password, salt, { keySize: 16, iterations: 520 });
  return CryptoJs.enc.Base64.stringify(val);
};
