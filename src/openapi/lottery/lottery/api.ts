/* tslint:disable */
/* eslint-disable */
/**
 * lottery/lottery.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface LotteryItem
 */
export interface LotteryItem {
    /**
     * 
     * @type {number}
     * @memberof LotteryItem
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof LotteryItem
     */
    'lotteryId'?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryItem
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof LotteryItem
     */
    'value'?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryItem
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof LotteryItem
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface LotteryLottery
 */
export interface LotteryLottery {
    /**
     * 
     * @type {LotteryLotteryInfo}
     * @memberof LotteryLottery
     */
    'lottery'?: LotteryLotteryInfo;
    /**
     * 
     * @type {Array<LotteryItem>}
     * @memberof LotteryLottery
     */
    'items'?: Array<LotteryItem>;
    /**
     * 
     * @type {Array<LotteryRemark>}
     * @memberof LotteryLottery
     */
    'remarks'?: Array<LotteryRemark>;
}
/**
 * 
 * @export
 * @interface LotteryLotteryInfo
 */
export interface LotteryLotteryInfo {
    /**
     * 
     * @type {number}
     * @memberof LotteryLotteryInfo
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryLotteryInfo
     */
    'userId'?: string;
    /**
     * 
     * @type {string}
     * @memberof LotteryLotteryInfo
     */
    'title'?: string;
    /**
     * 
     * @type {LotterylotteryType}
     * @memberof LotteryLotteryInfo
     */
    'type'?: LotterylotteryType;
    /**
     * 
     * @type {boolean}
     * @memberof LotteryLotteryInfo
     */
    'remark'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LotteryLotteryInfo
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof LotteryLotteryInfo
     */
    'updatedAt'?: string;
}


/**
 * 
 * @export
 * @interface LotteryLotteryQuery
 */
export interface LotteryLotteryQuery {
    /**
     * 
     * @type {number}
     * @memberof LotteryLotteryQuery
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryLotteryQuery
     */
    'userId'?: string;
}
/**
 * 
 * @export
 * @interface LotteryNewItem
 */
export interface LotteryNewItem {
    /**
     * 
     * @type {number}
     * @memberof LotteryNewItem
     */
    'lotteryId'?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryNewItem
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof LotteryNewItem
     */
    'value'?: number;
}
/**
 * 
 * @export
 * @interface LotteryNewLottery
 */
export interface LotteryNewLottery {
    /**
     * 
     * @type {LotteryNewLotteryInfo}
     * @memberof LotteryNewLottery
     */
    'lottery'?: LotteryNewLotteryInfo;
    /**
     * 
     * @type {Array<LotteryNewItem>}
     * @memberof LotteryNewLottery
     */
    'items'?: Array<LotteryNewItem>;
    /**
     * 
     * @type {Array<LotteryNewRemark>}
     * @memberof LotteryNewLottery
     */
    'remarks'?: Array<LotteryNewRemark>;
}
/**
 * 
 * @export
 * @interface LotteryNewLotteryInfo
 */
export interface LotteryNewLotteryInfo {
    /**
     * 
     * @type {string}
     * @memberof LotteryNewLotteryInfo
     */
    'userId'?: string;
    /**
     * 
     * @type {string}
     * @memberof LotteryNewLotteryInfo
     */
    'title'?: string;
    /**
     * 
     * @type {LotterylotteryType}
     * @memberof LotteryNewLotteryInfo
     */
    'type'?: LotterylotteryType;
    /**
     * 
     * @type {boolean}
     * @memberof LotteryNewLotteryInfo
     */
    'remark'?: boolean;
}


/**
 * 
 * @export
 * @interface LotteryNewRemark
 */
export interface LotteryNewRemark {
    /**
     * 
     * @type {number}
     * @memberof LotteryNewRemark
     */
    'lotteryId'?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryNewRemark
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LotteryNewRemark
     */
    'require'?: boolean;
}
/**
 * 
 * @export
 * @interface LotteryRemark
 */
export interface LotteryRemark {
    /**
     * 
     * @type {number}
     * @memberof LotteryRemark
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof LotteryRemark
     */
    'lotteryId'?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryRemark
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LotteryRemark
     */
    'require'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LotteryRemark
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof LotteryRemark
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface LotteryServiceUpdateRequest
 */
export interface LotteryServiceUpdateRequest {
    /**
     * 
     * @type {LotteryNewLottery}
     * @memberof LotteryServiceUpdateRequest
     */
    'lottery'?: LotteryNewLottery;
}
/**
 * 
 * @export
 * @interface LotterylotteryCreateRequest
 */
export interface LotterylotteryCreateRequest {
    /**
     * 
     * @type {LotteryNewLottery}
     * @memberof LotterylotteryCreateRequest
     */
    'lottery'?: LotteryNewLottery;
}
/**
 * 
 * @export
 * @interface LotterylotteryCreateResponse
 */
export interface LotterylotteryCreateResponse {
    /**
     * 
     * @type {LotteryLottery}
     * @memberof LotterylotteryCreateResponse
     */
    'lottery'?: LotteryLottery;
}
/**
 * 
 * @export
 * @interface LotterylotteryGetResponse
 */
export interface LotterylotteryGetResponse {
    /**
     * 
     * @type {LotteryLottery}
     * @memberof LotterylotteryGetResponse
     */
    'lottery'?: LotteryLottery;
}
/**
 * 
 * @export
 * @interface LotterylotteryListResponse
 */
export interface LotterylotteryListResponse {
    /**
     * 
     * @type {Array<LotteryLottery>}
     * @memberof LotterylotteryListResponse
     */
    'lotterys'?: Array<LotteryLottery>;
    /**
     * 
     * @type {PaginatePaginated}
     * @memberof LotterylotteryListResponse
     */
    'paginated'?: PaginatePaginated;
}
/**
 * - NUMBER: 个数  - PERCENT: 几率
 * @export
 * @enum {string}
 */

export const LotterylotteryType = {
    Number: 'NUMBER',
    Percent: 'PERCENT'
} as const;

export type LotterylotteryType = typeof LotterylotteryType[keyof typeof LotterylotteryType];


/**
 * 
 * @export
 * @interface LotterylotteryUpdateResponse
 */
export interface LotterylotteryUpdateResponse {
    /**
     * 
     * @type {LotteryLottery}
     * @memberof LotterylotteryUpdateResponse
     */
    'lottery'?: LotteryLottery;
}
/**
 * 
 * @export
 * @interface PaginatePaginate
 */
export interface PaginatePaginate {
    /**
     * 
     * @type {number}
     * @memberof PaginatePaginate
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatePaginate
     */
    'perPage'?: number;
}
/**
 * 
 * @export
 * @interface PaginatePaginated
 */
export interface PaginatePaginated {
    /**
     * 
     * @type {number}
     * @memberof PaginatePaginated
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatePaginated
     */
    'perPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatePaginated
     */
    'total'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatePaginated
     */
    'totalPages'?: number;
}
/**
 * 
 * @export
 * @interface ProtobufAny
 */
export interface ProtobufAny {
    [key: string]: object | any;

    /**
     * 
     * @type {string}
     * @memberof ProtobufAny
     */
    '@type'?: string;
}
/**
 * 
 * @export
 * @interface RpcStatus
 */
export interface RpcStatus {
    /**
     * 
     * @type {number}
     * @memberof RpcStatus
     */
    'code'?: number;
    /**
     * 
     * @type {string}
     * @memberof RpcStatus
     */
    'message'?: string;
    /**
     * 
     * @type {Array<ProtobufAny>}
     * @memberof RpcStatus
     */
    'details'?: Array<ProtobufAny>;
}

/**
 * LotteryServiceApi - axios parameter creator
 * @export
 */
export const LotteryServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {LotterylotteryCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lotteryServiceCreate: async (body: LotterylotteryCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('lotteryServiceCreate', 'body', body)
            const localVarPath = `/lottery.lottery.LotteryService/lotterys`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lotteryServiceDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('lotteryServiceDelete', 'id', id)
            const localVarPath = `/lottery.lottery.LotteryService/lotterys/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lotteryServiceGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('lotteryServiceGet', 'id', id)
            const localVarPath = `/lottery.lottery.LotteryService/lotterys/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [lotteryId] id
         * @param {string} [lotteryUserId] id
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lotteryServiceList: async (lotteryId?: number, lotteryUserId?: string, paginatePage?: number, paginatePerPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/lottery.lottery.LotteryService/lotterys`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (lotteryId !== undefined) {
                localVarQueryParameter['lottery.id'] = lotteryId;
            }

            if (lotteryUserId !== undefined) {
                localVarQueryParameter['lottery.userId'] = lotteryUserId;
            }

            if (paginatePage !== undefined) {
                localVarQueryParameter['paginate.page'] = paginatePage;
            }

            if (paginatePerPage !== undefined) {
                localVarQueryParameter['paginate.perPage'] = paginatePerPage;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {LotteryServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lotteryServiceUpdate: async (id: number, body: LotteryServiceUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('lotteryServiceUpdate', 'id', id)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('lotteryServiceUpdate', 'body', body)
            const localVarPath = `/lottery.lottery.LotteryService/lotterys/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LotteryServiceApi - functional programming interface
 * @export
 */
export const LotteryServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LotteryServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {LotterylotteryCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lotteryServiceCreate(body: LotterylotteryCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotterylotteryCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lotteryServiceCreate(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lotteryServiceDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lotteryServiceDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lotteryServiceGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotterylotteryGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lotteryServiceGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [lotteryId] id
         * @param {string} [lotteryUserId] id
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lotteryServiceList(lotteryId?: number, lotteryUserId?: string, paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotterylotteryListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lotteryServiceList(lotteryId, lotteryUserId, paginatePage, paginatePerPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {LotteryServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lotteryServiceUpdate(id: number, body: LotteryServiceUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotterylotteryUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lotteryServiceUpdate(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LotteryServiceApi - factory interface
 * @export
 */
export const LotteryServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LotteryServiceApiFp(configuration)
    return {
        /**
         * 
         * @param {LotterylotteryCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lotteryServiceCreate(body: LotterylotteryCreateRequest, options?: any): AxiosPromise<LotterylotteryCreateResponse> {
            return localVarFp.lotteryServiceCreate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lotteryServiceDelete(id: number, options?: any): AxiosPromise<object> {
            return localVarFp.lotteryServiceDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lotteryServiceGet(id: number, options?: any): AxiosPromise<LotterylotteryGetResponse> {
            return localVarFp.lotteryServiceGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [lotteryId] id
         * @param {string} [lotteryUserId] id
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lotteryServiceList(lotteryId?: number, lotteryUserId?: string, paginatePage?: number, paginatePerPage?: number, options?: any): AxiosPromise<LotterylotteryListResponse> {
            return localVarFp.lotteryServiceList(lotteryId, lotteryUserId, paginatePage, paginatePerPage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {LotteryServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lotteryServiceUpdate(id: number, body: LotteryServiceUpdateRequest, options?: any): AxiosPromise<LotterylotteryUpdateResponse> {
            return localVarFp.lotteryServiceUpdate(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LotteryServiceApi - object-oriented interface
 * @export
 * @class LotteryServiceApi
 * @extends {BaseAPI}
 */
export class LotteryServiceApi extends BaseAPI {
    /**
     * 
     * @param {LotterylotteryCreateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LotteryServiceApi
     */
    public lotteryServiceCreate(body: LotterylotteryCreateRequest, options?: AxiosRequestConfig) {
        return LotteryServiceApiFp(this.configuration).lotteryServiceCreate(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LotteryServiceApi
     */
    public lotteryServiceDelete(id: number, options?: AxiosRequestConfig) {
        return LotteryServiceApiFp(this.configuration).lotteryServiceDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LotteryServiceApi
     */
    public lotteryServiceGet(id: number, options?: AxiosRequestConfig) {
        return LotteryServiceApiFp(this.configuration).lotteryServiceGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [lotteryId] id
     * @param {string} [lotteryUserId] id
     * @param {number} [paginatePage] 
     * @param {number} [paginatePerPage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LotteryServiceApi
     */
    public lotteryServiceList(lotteryId?: number, lotteryUserId?: string, paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig) {
        return LotteryServiceApiFp(this.configuration).lotteryServiceList(lotteryId, lotteryUserId, paginatePage, paginatePerPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {LotteryServiceUpdateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LotteryServiceApi
     */
    public lotteryServiceUpdate(id: number, body: LotteryServiceUpdateRequest, options?: AxiosRequestConfig) {
        return LotteryServiceApiFp(this.configuration).lotteryServiceUpdate(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}


