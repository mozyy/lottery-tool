import { getFileSystemManager, uploadFile } from '@tarojs/taro';
import axios from 'axios';
import crypto from 'crypto-js';
import { useCallback } from 'react';
import useSWRMutationHook from 'swr/mutation';
import { ossBucket, ossLocation, ossStsPath } from '../env';

const fetcherSts = ([token, url]) => axios.post(url);

const getPolicy = () => {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  const policyText = {
    expiration: date.toISOString(), // 设置policy过期时间。
    conditions: [
      // 限制上传大小。
      ['content-length-range', 0, 1024 * 1024 * 1024],
    ],
  };
  const policy = crypto.enc.Base64.stringify(
    crypto.enc.Utf8.parse(JSON.stringify(policyText)),
  ); // policy必须为base64的string。
  return policy;
};

const computeSignature = (accessKeySecret, canonicalString) => crypto
  .enc.Base64.stringify(crypto.HmacSHA1(canonicalString, accessKeySecret));

export const useUploadOss = () => {
  // TODO: add env var
  const { trigger } = useSWRMutationHook([ossStsPath, ''], fetcherSts);
  const uploadOss = useCallback(async (filePath: string) => {
    const { data: { credentials } } = await trigger();
    const policy = getPolicy(); // policy必须为base64的string。
    const signature = computeSignature(credentials.accessKeySecret, policy);

    const fileExt = filePath.split('.').pop();
    const fileManager = getFileSystemManager();

    const fileInfo:any = await new Promise((success, fail) => {
      fileManager.getFileInfo({ filePath, success, fail });
    });

    const fileName = fileInfo?.digest ? `${fileInfo.digest}.${fileExt || 'jpeg'}` : filePath.split('/').pop();
    const key = `weixin/${fileName}`;

    const resp = await uploadFile({
      // TODO: add env var
      url: `https://${ossBucket}.oss-${ossLocation}.aliyuncs.com`, // 开发者服务器的URL。
      filePath,
      name: 'file', // 必须填file。
      formData: {
        key,
        policy,
        OSSAccessKeyId: credentials.accessKeyId,
        signature,
        'x-oss-security-token': credentials.securityToken, // 使用STS签名时必传。
        'x-oss-forbid-overwrite': 'true',
      },
      header: {
        'x-oss-forbid-overwrite': 'true',
      },
    });
    if (resp.statusCode === 204) {
      console.log('上传成功');
    } else {
      console.warn('上传失败', resp, key);
    }
    return key;
  }, [trigger]);

  return uploadOss;
};
