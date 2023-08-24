import { envBrowser } from '@/env.browser';
import { envServer } from '@/env.server';
import OSS from 'ali-oss';
import dayjs from 'dayjs';
import { NextResponse } from 'next/server';

const config = {
  accessKeyId: envServer.ossAccessKeyId,
  accessKeySecret: envServer.ossAccessKeySecret,
  bucket: envBrowser.ossBucket,
  callbackUrl: 'url',
};

const client = new OSS(config);

export async function POST(request: Request) {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const policy = {
    expiration: date.toISOString(), // 请求有效期
    conditions: [
      ['content-length-range', 0, 1048576000], // 设置上传文件的大小限制
      // { bucket: client.options.bucket } // 限制可上传的bucket
    ],
  };
  // 签名
  const formData = await client.calculatePostSignature(policy);
  // bucket域名
  const host = `https://${config.bucket}.oss-${envBrowser.ossLocaltion}.aliyuncs.com`.toString();
  // 回调
  const callback = {
    callbackUrl: config.callbackUrl,
    callbackBody:
      // eslint-disable-next-line no-template-curly-in-string
      'filename=${object}&size=${size}&mimeType=${mimeType}&height=${imageInfo.height}&width=${imageInfo.width}',
    callbackBodyType: 'application/x-www-form-urlencoded',
  };
  // 返回参数
  const params = {
    expire: dayjs().add(1, 'days').unix().toString(),
    policy: formData.policy,
    signature: formData.Signature,
    accessid: formData.OSSAccessKeyId,
    host,
    callback: Buffer.from(JSON.stringify(callback)).toString('base64'),
  };
  return NextResponse.json(params);
}
