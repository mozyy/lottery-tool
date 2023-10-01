import { getFileSystemManager, uploadFile } from '@tarojs/taro';
import { OssBucketName } from '@zyy/openapi/src/axios/oss/oss';
import { getBaseUrl } from '@zyy/utils/src/oss';
import axios from 'axios';
import crypto from 'crypto-js';
import { useCallback } from 'react';
import useSWRMutationHook from 'swr/mutation';
import { ossServiceApi } from '../api/oss';
import { ossStsPath } from '../env';
import { useSWRMutation } from './swrMutation';

const fetcherSts = ([, url]) => axios.post(url);

const getPolicy = () => {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  const policyText = {
    expiration: date.toISOString(), // 设置policy过期时间。
    conditions: [
      // 限制上传大小。
      ['content-length-range', 0, 50 * 1024 * 1024],
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
  const { trigger: uploadTrigger } = useSWRMutationHook([ossStsPath, ''], fetcherSts);
  const { trigger: createTrigger } = useSWRMutation([ossServiceApi.ossServiceCreate]);
  const uploadOss = useCallback(async (filePath: string) => {
    const { data: { credentials } } = await uploadTrigger();
    const policy = getPolicy(); // policy必须为base64的string。
    const signature = computeSignature(credentials.accessKeySecret, policy);

    const fileExt = filePath.split('.').pop();
    const fileManager = getFileSystemManager();

    const fileInfo:any = await new Promise((success, fail) => {
      fileManager.getFileInfo({ filePath, success, fail });
    });

    const fileName = fileInfo?.digest ? `${fileInfo.digest}.${fileExt || 'jpeg'}` : filePath.split('/').pop();
    const key = `weixin/${fileName}`;

    const respOss = await uploadFile({
      url: getBaseUrl(OssBucketName.Image), // 开发者服务器的URL。
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

    if (respOss.statusCode !== 204) {
      console.warn('上传失败', respOss, key);
      return Promise.reject(Error('上传失败'));
    }
    console.log('上传成功');
    const resp = await createTrigger([{
      oss: { bucketName: OssBucketName.Image, objectKey: key, name: fileName },
    }]);
    return resp.oss!;
  }, [createTrigger, uploadTrigger]);

  return uploadOss;
};
