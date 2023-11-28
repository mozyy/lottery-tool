import { BlogServiceApi, Configuration } from '@zyy/openapi/src/fetch/blog/blog';
import { configurationParameters } from '../utils/request';

const config = new Configuration(configurationParameters);

export const blogApi = new BlogServiceApi(config);
