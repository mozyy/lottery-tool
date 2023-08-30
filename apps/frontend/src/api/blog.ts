import { envBrowser } from '@/env.browser';
import { BlogServiceApi, Configuration } from '@zyy/openapi/dist/fetch/blog/blog';

const config = new Configuration({ basePath: envBrowser.basePath });

export const blogApi = new BlogServiceApi(config);
