/* tslint:disable */
/* eslint-disable */
/**
 * lottery/record.proto
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
 * @interface LotteryrecordCreateRequest
 */
export interface LotteryrecordCreateRequest {
    /**
     * 
     * @type {RecordNewRecord}
     * @memberof LotteryrecordCreateRequest
     */
    'record'?: RecordNewRecord;
}
/**
 * 
 * @export
 * @interface LotteryrecordCreateResponse
 */
export interface LotteryrecordCreateResponse {
    /**
     * 
     * @type {RecordRecord}
     * @memberof LotteryrecordCreateResponse
     */
    'record'?: RecordRecord;
}
/**
 * 
 * @export
 * @interface LotteryrecordGetResponse
 */
export interface LotteryrecordGetResponse {
    /**
     * 
     * @type {RecordRecord}
     * @memberof LotteryrecordGetResponse
     */
    'record'?: RecordRecord;
}
/**
 * 
 * @export
 * @interface LotteryrecordListResponse
 */
export interface LotteryrecordListResponse {
    /**
     * 
     * @type {Array<RecordRecord>}
     * @memberof LotteryrecordListResponse
     */
    'records'?: Array<RecordRecord>;
    /**
     * 
     * @type {PaginatePaginated}
     * @memberof LotteryrecordListResponse
     */
    'paginated'?: PaginatePaginated;
}
/**
 * 
 * @export
 * @interface LotteryrecordUpdateResponse
 */
export interface LotteryrecordUpdateResponse {
    /**
     * 
     * @type {RecordRecord}
     * @memberof LotteryrecordUpdateResponse
     */
    'record'?: RecordRecord;
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
 * @interface RecordNewRecord
 */
export interface RecordNewRecord {
    /**
     * 
     * @type {RecordNewRecordInfo}
     * @memberof RecordNewRecord
     */
    'record'?: RecordNewRecordInfo;
    /**
     * 
     * @type {Array<RecordNewRecordRemark>}
     * @memberof RecordNewRecord
     */
    'recordRemarks'?: Array<RecordNewRecordRemark>;
}
/**
 * 
 * @export
 * @interface RecordNewRecordInfo
 */
export interface RecordNewRecordInfo {
    /**
     * 
     * @type {number}
     * @memberof RecordNewRecordInfo
     */
    'lotteryId'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordNewRecordInfo
     */
    'userId'?: string;
    /**
     * 
     * @type {number}
     * @memberof RecordNewRecordInfo
     */
    'itemId'?: number;
}
/**
 * 
 * @export
 * @interface RecordNewRecordRemark
 */
export interface RecordNewRecordRemark {
    /**
     * 
     * @type {number}
     * @memberof RecordNewRecordRemark
     */
    'recordId'?: number;
    /**
     * 
     * @type {number}
     * @memberof RecordNewRecordRemark
     */
    'remarkId'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordNewRecordRemark
     */
    'value'?: string;
}
/**
 * 
 * @export
 * @interface RecordRecord
 */
export interface RecordRecord {
    /**
     * 
     * @type {RecordRecordInfo}
     * @memberof RecordRecord
     */
    'record'?: RecordRecordInfo;
    /**
     * 
     * @type {LotteryLottery}
     * @memberof RecordRecord
     */
    'lottery'?: LotteryLottery;
    /**
     * 
     * @type {Array<RecordRecordRemark>}
     * @memberof RecordRecord
     */
    'recordRemarks'?: Array<RecordRecordRemark>;
}
/**
 * 
 * @export
 * @interface RecordRecordInfo
 */
export interface RecordRecordInfo {
    /**
     * 
     * @type {number}
     * @memberof RecordRecordInfo
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof RecordRecordInfo
     */
    'lotteryId'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordRecordInfo
     */
    'userId'?: string;
    /**
     * 
     * @type {number}
     * @memberof RecordRecordInfo
     */
    'itemId'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordRecordInfo
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordRecordInfo
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface RecordRecordQuery
 */
export interface RecordRecordQuery {
    /**
     * 
     * @type {number}
     * @memberof RecordRecordQuery
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof RecordRecordQuery
     */
    'lotteryId'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordRecordQuery
     */
    'userId'?: string;
}
/**
 * 
 * @export
 * @interface RecordRecordRemark
 */
export interface RecordRecordRemark {
    /**
     * 
     * @type {number}
     * @memberof RecordRecordRemark
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof RecordRecordRemark
     */
    'recordId'?: number;
    /**
     * 
     * @type {number}
     * @memberof RecordRecordRemark
     */
    'remarkId'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordRecordRemark
     */
    'value'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordRecordRemark
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordRecordRemark
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface RecordServiceUpdateRequest
 */
export interface RecordServiceUpdateRequest {
    /**
     * 
     * @type {RecordNewRecord}
     * @memberof RecordServiceUpdateRequest
     */
    'record'?: RecordNewRecord;
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
 * RecordServiceApi - axios parameter creator
 * @export
 */
export const RecordServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {LotteryrecordCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordServiceCreate: async (body: LotteryrecordCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('recordServiceCreate', 'body', body)
            const localVarPath = `/lottery.record.RecordService/records`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["login"], configuration)


    
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
        recordServiceDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('recordServiceDelete', 'id', id)
            const localVarPath = `/lottery.record.RecordService/records/{id}`
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

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["login"], configuration)


    
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
        recordServiceGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('recordServiceGet', 'id', id)
            const localVarPath = `/lottery.record.RecordService/records/{id}`
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

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["login"], configuration)


    
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
         * @param {number} [recordId] id
         * @param {number} [recordLotteryId] id
         * @param {string} [recordUserId] id
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordServiceList: async (recordId?: number, recordLotteryId?: number, recordUserId?: string, paginatePage?: number, paginatePerPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/lottery.record.RecordService/records`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["login"], configuration)

            if (recordId !== undefined) {
                localVarQueryParameter['record.id'] = recordId;
            }

            if (recordLotteryId !== undefined) {
                localVarQueryParameter['record.lotteryId'] = recordLotteryId;
            }

            if (recordUserId !== undefined) {
                localVarQueryParameter['record.userId'] = recordUserId;
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
         * @param {RecordServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordServiceUpdate: async (id: number, body: RecordServiceUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('recordServiceUpdate', 'id', id)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('recordServiceUpdate', 'body', body)
            const localVarPath = `/lottery.record.RecordService/records/{id}`
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

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["login"], configuration)


    
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
 * RecordServiceApi - functional programming interface
 * @export
 */
export const RecordServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RecordServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {LotteryrecordCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recordServiceCreate(body: LotteryrecordCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotteryrecordCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recordServiceCreate(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recordServiceDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recordServiceDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recordServiceGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotteryrecordGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recordServiceGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [recordId] id
         * @param {number} [recordLotteryId] id
         * @param {string} [recordUserId] id
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recordServiceList(recordId?: number, recordLotteryId?: number, recordUserId?: string, paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotteryrecordListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recordServiceList(recordId, recordLotteryId, recordUserId, paginatePage, paginatePerPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {RecordServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recordServiceUpdate(id: number, body: RecordServiceUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotteryrecordUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recordServiceUpdate(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecordServiceApi - factory interface
 * @export
 */
export const RecordServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecordServiceApiFp(configuration)
    return {
        /**
         * 
         * @param {LotteryrecordCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordServiceCreate(body: LotteryrecordCreateRequest, options?: any): AxiosPromise<LotteryrecordCreateResponse> {
            return localVarFp.recordServiceCreate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordServiceDelete(id: number, options?: any): AxiosPromise<object> {
            return localVarFp.recordServiceDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordServiceGet(id: number, options?: any): AxiosPromise<LotteryrecordGetResponse> {
            return localVarFp.recordServiceGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [recordId] id
         * @param {number} [recordLotteryId] id
         * @param {string} [recordUserId] id
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordServiceList(recordId?: number, recordLotteryId?: number, recordUserId?: string, paginatePage?: number, paginatePerPage?: number, options?: any): AxiosPromise<LotteryrecordListResponse> {
            return localVarFp.recordServiceList(recordId, recordLotteryId, recordUserId, paginatePage, paginatePerPage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {RecordServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordServiceUpdate(id: number, body: RecordServiceUpdateRequest, options?: any): AxiosPromise<LotteryrecordUpdateResponse> {
            return localVarFp.recordServiceUpdate(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecordServiceApi - object-oriented interface
 * @export
 * @class RecordServiceApi
 * @extends {BaseAPI}
 */
export class RecordServiceApi extends BaseAPI {
    /**
     * 
     * @param {LotteryrecordCreateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordServiceApi
     */
    public recordServiceCreate(body: LotteryrecordCreateRequest, options?: AxiosRequestConfig) {
        return RecordServiceApiFp(this.configuration).recordServiceCreate(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordServiceApi
     */
    public recordServiceDelete(id: number, options?: AxiosRequestConfig) {
        return RecordServiceApiFp(this.configuration).recordServiceDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordServiceApi
     */
    public recordServiceGet(id: number, options?: AxiosRequestConfig) {
        return RecordServiceApiFp(this.configuration).recordServiceGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [recordId] id
     * @param {number} [recordLotteryId] id
     * @param {string} [recordUserId] id
     * @param {number} [paginatePage] 
     * @param {number} [paginatePerPage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordServiceApi
     */
    public recordServiceList(recordId?: number, recordLotteryId?: number, recordUserId?: string, paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig) {
        return RecordServiceApiFp(this.configuration).recordServiceList(recordId, recordLotteryId, recordUserId, paginatePage, paginatePerPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {RecordServiceUpdateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordServiceApi
     */
    public recordServiceUpdate(id: number, body: RecordServiceUpdateRequest, options?: AxiosRequestConfig) {
        return RecordServiceApiFp(this.configuration).recordServiceUpdate(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}

