import CryptoJs from 'crypto-js';

const a = 'ecb120cc';
const b = 'c3881a54';
const c = '87a5b728';
const d = 'd235a50b';
const key = CryptoJs.enc.Utf8.parse(`${a}${b}`);
const iv = CryptoJs.enc.Utf8.parse(`${c}${d}`);

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
