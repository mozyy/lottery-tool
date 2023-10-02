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

interface Oss extends Pick<OssOss, 'bucketName' | 'objectKey'> {

}

/**
 * 获取oss文件url
 * @param oss
 * @returns
 */
export const getUrl = (oss: Oss) => `${getBaseUrl(oss.bucketName!)}/${oss.objectKey}`;

interface OssOptions {
  /** 图片处理:
   * resize,w_400,h_100/quality,q_75
   * https://help.aliyun.com/document_detail/144582.html?spm=a2c4g.183902.0.0.502b1e4fh6v6lf
   */
  process?: string
  format?: 'webp' | 'jpg' | 'png' | 'gif' | string
}
/**
 * @param options.process
 * 图片处理:
 * resize,w_400,h_100/quality,q_75
 * https://help.aliyun.com/document_detail/144582.html?spm=a2c4g.183902.0.0.502b1e4fh6v6lf
 */
export const getImage = (oss: Oss, options?: OssOptions) => {
  const process = options?.process || 'quality,q_75';
  const format = options?.format || 'webp';
  const url = getUrl(oss);
  return `${url}?x-oss-process=image/${process}/format,${format}`;
};
