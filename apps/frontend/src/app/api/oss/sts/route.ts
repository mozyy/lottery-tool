import 'server-only';
import Sts20150401, { AssumeRoleRequest, AssumeRoleResponseBody } from '@alicloud/sts20150401';
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import { Config } from '@alicloud/openapi-client';
import { RuntimeOptions } from '@alicloud/tea-util';
import { NextResponse } from 'next/server';
import { envServer } from '@/env.server';
import { envBrowser } from '@/env.browser';

let sts:AssumeRoleResponseBody;

const config = new Config({
  // 必填，您的 AccessKey ID
  accessKeyId: envServer.ossAccessKeyId,
  // 必填，您的 AccessKey Secret
  accessKeySecret: envServer.ossAccessKeySecret,
});
config.endpoint = `sts.${envBrowser.ossLocaltion}.aliyuncs.com`;
const client = new Sts20150401(config);

export async function POST(request: Request) {
  if (!sts || new Date(sts.credentials!.expiration!) <= new Date()) {
    const assumeRoleRequest = new AssumeRoleRequest({
      roleArn: envServer.ossRole,
      roleSessionName: 'oss',
      durationSeconds: 3600,
      // policy: 'oss',
    });
    const resp = await client.assumeRoleWithOptions(assumeRoleRequest, new RuntimeOptions({ }));
    sts = resp.body;
  }

  return NextResponse.json(sts);
}
