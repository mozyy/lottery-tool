import { OssOss as OssOssAxios } from '@zyy/openapi/src/axios/oss/oss';
import { OssBucketName, OssOss } from '@zyy/openapi/src/fetch/oss/oss';
import { ossLocation } from './env';

const bucketNameMap = {
  [OssBucketName.Image]: 'uck-image',
  [OssBucketName.Static]: 'uck-file',
};

/**
 * 获取oss地址
 * @param bucketName
 * @returns
 */
export const getBaseUrl = (bucketName: OssBucketName) => `https://${bucketNameMap[bucketName]}.oss-${ossLocation}.aliyuncs.com`;

/**
 * 获取oss文件url
 * @param oss
 * @returns
 */
export const getUrl = (oss: OssOss | OssOssAxios) => `${getBaseUrl(oss.bucketName!)}/${oss.objectKey}`;
