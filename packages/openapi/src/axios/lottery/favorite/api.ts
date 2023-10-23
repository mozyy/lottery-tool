/* tslint:disable */
/* eslint-disable */
/**
 * lottery/favorite.proto
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
 * @interface FavoriteServiceUpdateRequest
 */
export interface FavoriteServiceUpdateRequest {
    /**
     * 
     * @type {LotteryfavoriteNewFavorite}
     * @memberof FavoriteServiceUpdateRequest
     */
    'favorite'?: LotteryfavoriteNewFavorite;
}
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
 * 
 * @export
 * @interface LotteryfavoriteCreateRequest
 */
export interface LotteryfavoriteCreateRequest {
    /**
     * 
     * @type {LotteryfavoriteNewFavorite}
     * @memberof LotteryfavoriteCreateRequest
     */
    'favorite'?: LotteryfavoriteNewFavorite;
}
/**
 * 
 * @export
 * @interface LotteryfavoriteCreateResponse
 */
export interface LotteryfavoriteCreateResponse {
    /**
     * 
     * @type {LotteryfavoriteFavoriteWithLottery}
     * @memberof LotteryfavoriteCreateResponse
     */
    'favorite'?: LotteryfavoriteFavoriteWithLottery;
}
/**
 * 
 * @export
 * @interface LotteryfavoriteFavorite
 */
export interface LotteryfavoriteFavorite {
    /**
     * 
     * @type {number}
     * @memberof LotteryfavoriteFavorite
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryfavoriteFavorite
     */
    'userId'?: string;
    /**
     * 
     * @type {number}
     * @memberof LotteryfavoriteFavorite
     */
    'lotteryId'?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryfavoriteFavorite
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof LotteryfavoriteFavorite
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface LotteryfavoriteFavoriteWithLottery
 */
export interface LotteryfavoriteFavoriteWithLottery {
    /**
     * 
     * @type {LotteryfavoriteFavorite}
     * @memberof LotteryfavoriteFavoriteWithLottery
     */
    'favorite'?: LotteryfavoriteFavorite;
    /**
     * 
     * @type {LotteryLottery}
     * @memberof LotteryfavoriteFavoriteWithLottery
     */
    'lottery'?: LotteryLottery;
}
/**
 * 
 * @export
 * @interface LotteryfavoriteGetResponse
 */
export interface LotteryfavoriteGetResponse {
    /**
     * 
     * @type {LotteryfavoriteFavoriteWithLottery}
     * @memberof LotteryfavoriteGetResponse
     */
    'favorite'?: LotteryfavoriteFavoriteWithLottery;
}
/**
 * 
 * @export
 * @interface LotteryfavoriteListResponse
 */
export interface LotteryfavoriteListResponse {
    /**
     * 
     * @type {Array<LotteryfavoriteFavoriteWithLottery>}
     * @memberof LotteryfavoriteListResponse
     */
    'favorites'?: Array<LotteryfavoriteFavoriteWithLottery>;
    /**
     * 
     * @type {PaginatePaginated}
     * @memberof LotteryfavoriteListResponse
     */
    'paginated'?: PaginatePaginated;
}
/**
 * 
 * @export
 * @interface LotteryfavoriteNewFavorite
 */
export interface LotteryfavoriteNewFavorite {
    /**
     * 
     * @type {string}
     * @memberof LotteryfavoriteNewFavorite
     */
    'userId'?: string;
    /**
     * 
     * @type {number}
     * @memberof LotteryfavoriteNewFavorite
     */
    'lotteryId'?: number;
}
/**
 * 
 * @export
 * @interface LotteryfavoriteUpdateResponse
 */
export interface LotteryfavoriteUpdateResponse {
    /**
     * 
     * @type {LotteryfavoriteFavoriteWithLottery}
     * @memberof LotteryfavoriteUpdateResponse
     */
    'favorite'?: LotteryfavoriteFavoriteWithLottery;
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
 * FavoriteServiceApi - axios parameter creator
 * @export
 */
export const FavoriteServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {LotteryfavoriteCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteServiceCreate: async (body: LotteryfavoriteCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('favoriteServiceCreate', 'body', body)
            const localVarPath = `/lottery.favorite.FavoriteService/favorites`;
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
        favoriteServiceDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('favoriteServiceDelete', 'id', id)
            const localVarPath = `/lottery.favorite.FavoriteService/favorites/{id}`
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
        favoriteServiceGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('favoriteServiceGet', 'id', id)
            const localVarPath = `/lottery.favorite.FavoriteService/favorites/{id}`
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
         * @param {string} [userId] 
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteServiceList: async (userId?: string, paginatePage?: number, paginatePerPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/lottery.favorite.FavoriteService/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
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
         * @param {FavoriteServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteServiceUpdate: async (id: number, body: FavoriteServiceUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('favoriteServiceUpdate', 'id', id)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('favoriteServiceUpdate', 'body', body)
            const localVarPath = `/lottery.favorite.FavoriteService/favorites/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
 * FavoriteServiceApi - functional programming interface
 * @export
 */
export const FavoriteServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FavoriteServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {LotteryfavoriteCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async favoriteServiceCreate(body: LotteryfavoriteCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotteryfavoriteCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.favoriteServiceCreate(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async favoriteServiceDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.favoriteServiceDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async favoriteServiceGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotteryfavoriteGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.favoriteServiceGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [userId] 
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async favoriteServiceList(userId?: string, paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotteryfavoriteListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.favoriteServiceList(userId, paginatePage, paginatePerPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {FavoriteServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async favoriteServiceUpdate(id: number, body: FavoriteServiceUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LotteryfavoriteUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.favoriteServiceUpdate(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FavoriteServiceApi - factory interface
 * @export
 */
export const FavoriteServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FavoriteServiceApiFp(configuration)
    return {
        /**
         * 
         * @param {LotteryfavoriteCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteServiceCreate(body: LotteryfavoriteCreateRequest, options?: any): AxiosPromise<LotteryfavoriteCreateResponse> {
            return localVarFp.favoriteServiceCreate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteServiceDelete(id: number, options?: any): AxiosPromise<object> {
            return localVarFp.favoriteServiceDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteServiceGet(id: number, options?: any): AxiosPromise<LotteryfavoriteGetResponse> {
            return localVarFp.favoriteServiceGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [userId] 
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteServiceList(userId?: string, paginatePage?: number, paginatePerPage?: number, options?: any): AxiosPromise<LotteryfavoriteListResponse> {
            return localVarFp.favoriteServiceList(userId, paginatePage, paginatePerPage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {FavoriteServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        favoriteServiceUpdate(id: number, body: FavoriteServiceUpdateRequest, options?: any): AxiosPromise<LotteryfavoriteUpdateResponse> {
            return localVarFp.favoriteServiceUpdate(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FavoriteServiceApi - object-oriented interface
 * @export
 * @class FavoriteServiceApi
 * @extends {BaseAPI}
 */
export class FavoriteServiceApi extends BaseAPI {
    /**
     * 
     * @param {LotteryfavoriteCreateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoriteServiceApi
     */
    public favoriteServiceCreate(body: LotteryfavoriteCreateRequest, options?: AxiosRequestConfig) {
        return FavoriteServiceApiFp(this.configuration).favoriteServiceCreate(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoriteServiceApi
     */
    public favoriteServiceDelete(id: number, options?: AxiosRequestConfig) {
        return FavoriteServiceApiFp(this.configuration).favoriteServiceDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoriteServiceApi
     */
    public favoriteServiceGet(id: number, options?: AxiosRequestConfig) {
        return FavoriteServiceApiFp(this.configuration).favoriteServiceGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [userId] 
     * @param {number} [paginatePage] 
     * @param {number} [paginatePerPage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoriteServiceApi
     */
    public favoriteServiceList(userId?: string, paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig) {
        return FavoriteServiceApiFp(this.configuration).favoriteServiceList(userId, paginatePage, paginatePerPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {FavoriteServiceUpdateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoriteServiceApi
     */
    public favoriteServiceUpdate(id: number, body: FavoriteServiceUpdateRequest, options?: AxiosRequestConfig) {
        return FavoriteServiceApiFp(this.configuration).favoriteServiceUpdate(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}


