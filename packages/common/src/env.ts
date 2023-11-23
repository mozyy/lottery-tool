export const basePath = process.env.TARO_APP_BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH!;

export const key = process.env.TARO_APP_KEY || process.env.NEXT_PUBLIC_KEY!;
export const iv = process.env.TARO_APP_IV || process.env.NEXT_PUBLIC_IV!;
export const salt = process.env.TARO_APP_SALT || process.env.NEXT_PUBLIC_SALT!;

export const ossLocation = process.env.TARO_APP_OSS_LOCATION
  || process.env.NEXT_PUBLIC_OSS_LOCATION!;
export const ossBucket = process.env.TARO_APP_OSS_BUCKET || process.env.NEXT_PUBLIC_OSS_BUCKET!;
export const ossStsPath = process.env.TARO_APP_OSS_STS_PATH
  || process.env.NEXT_PUBLIC_OSS_STS_PATH!;
