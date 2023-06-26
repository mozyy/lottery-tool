import { Configuration, UserServiceApi } from '../openapi/lottery/user';
import { configParam } from '../utils/request';


const conf = new Configuration(configParam);

export const userServiceApi = new UserServiceApi(conf);

