import 'server-only';

export const envServer = {
  // oss
  ossAccessKeyId: process.env.OSS_ACCESS_KEY_ID!,
  ossAccessKeySecret: process.env.OSS_ACCESS_KEY_SECRET!,
  ossRole: process.env.OSS_ROLE!,

};
