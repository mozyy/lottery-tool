/* tslint:disable */
/* eslint-disable */
/**
 * health/nurse.proto
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
 * @interface HealthnurseCreateRequest
 */
export interface HealthnurseCreateRequest {
    /**
     * 
     * @type {NurseNewNurse}
     * @memberof HealthnurseCreateRequest
     */
    'nurse'?: NurseNewNurse;
}
/**
 * 
 * @export
 * @interface HealthnurseCreateResponse
 */
export interface HealthnurseCreateResponse {
    /**
     * 
     * @type {NurseNurse}
     * @memberof HealthnurseCreateResponse
     */
    'nurse'?: NurseNurse;
}
/**
 * 
 * @export
 * @interface HealthnurseGetResponse
 */
export interface HealthnurseGetResponse {
    /**
     * 
     * @type {NurseNurse}
     * @memberof HealthnurseGetResponse
     */
    'nurse'?: NurseNurse;
    /**
     * 
     * @type {HospitalHospital}
     * @memberof HealthnurseGetResponse
     */
    'hospital'?: HospitalHospital;
}
/**
 * 
 * @export
 * @interface HealthnurseListResponse
 */
export interface HealthnurseListResponse {
    /**
     * 
     * @type {Array<NurseNurse>}
     * @memberof HealthnurseListResponse
     */
    'nurse'?: Array<NurseNurse>;
    /**
     * 
     * @type {PaginatePaginated}
     * @memberof HealthnurseListResponse
     */
    'paginated'?: PaginatePaginated;
}
/**
 * 
 * @export
 * @interface HealthnurseUpdateResponse
 */
export interface HealthnurseUpdateResponse {
    /**
     * 
     * @type {NurseNurse}
     * @memberof HealthnurseUpdateResponse
     */
    'nurse'?: NurseNurse;
}
/**
 * 
 * @export
 * @interface HospitalHospital
 */
export interface HospitalHospital {
    /**
     * 
     * @type {number}
     * @memberof HospitalHospital
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof HospitalHospital
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof HospitalHospital
     */
    'image'?: string;
    /**
     * 
     * @type {string}
     * @memberof HospitalHospital
     */
    'summary'?: string;
    /**
     * 
     * @type {string}
     * @memberof HospitalHospital
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof HospitalHospital
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface NurseNewNurse
 */
export interface NurseNewNurse {
    /**
     * 
     * @type {string}
     * @memberof NurseNewNurse
     */
    'userId'?: string;
    /**
     * 
     * @type {number}
     * @memberof NurseNewNurse
     */
    'departmentId'?: number;
}
/**
 * 
 * @export
 * @interface NurseNurse
 */
export interface NurseNurse {
    /**
     * 
     * @type {number}
     * @memberof NurseNurse
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof NurseNurse
     */
    'userId'?: string;
    /**
     * 
     * @type {number}
     * @memberof NurseNurse
     */
    'departmentId'?: number;
    /**
     * 
     * @type {string}
     * @memberof NurseNurse
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof NurseNurse
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface NurseServiceUpdateRequest
 */
export interface NurseServiceUpdateRequest {
    /**
     * 
     * @type {NurseNewNurse}
     * @memberof NurseServiceUpdateRequest
     */
    'nurse'?: NurseNewNurse;
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
 * NurseServiceApi - axios parameter creator
 * @export
 */
export const NurseServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {HealthnurseCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nurseServiceCreate: async (body: HealthnurseCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('nurseServiceCreate', 'body', body)
            const localVarPath = `/health.nurse.NurseService/nurses`;
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
        nurseServiceDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('nurseServiceDelete', 'id', id)
            const localVarPath = `/health.nurse.NurseService/nurses/{id}`
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
        nurseServiceGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('nurseServiceGet', 'id', id)
            const localVarPath = `/health.nurse.NurseService/nurses/{id}`
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
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nurseServiceList: async (paginatePage?: number, paginatePerPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/health.nurse.NurseService/nurses`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * @param {NurseServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nurseServiceUpdate: async (id: number, body: NurseServiceUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('nurseServiceUpdate', 'id', id)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('nurseServiceUpdate', 'body', body)
            const localVarPath = `/health.nurse.NurseService/nurses/{id}`
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
 * NurseServiceApi - functional programming interface
 * @export
 */
export const NurseServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NurseServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {HealthnurseCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nurseServiceCreate(body: HealthnurseCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthnurseCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nurseServiceCreate(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nurseServiceDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nurseServiceDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nurseServiceGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthnurseGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nurseServiceGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nurseServiceList(paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthnurseListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nurseServiceList(paginatePage, paginatePerPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {NurseServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nurseServiceUpdate(id: number, body: NurseServiceUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthnurseUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nurseServiceUpdate(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NurseServiceApi - factory interface
 * @export
 */
export const NurseServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NurseServiceApiFp(configuration)
    return {
        /**
         * 
         * @param {HealthnurseCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nurseServiceCreate(body: HealthnurseCreateRequest, options?: any): AxiosPromise<HealthnurseCreateResponse> {
            return localVarFp.nurseServiceCreate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nurseServiceDelete(id: number, options?: any): AxiosPromise<object> {
            return localVarFp.nurseServiceDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nurseServiceGet(id: number, options?: any): AxiosPromise<HealthnurseGetResponse> {
            return localVarFp.nurseServiceGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nurseServiceList(paginatePage?: number, paginatePerPage?: number, options?: any): AxiosPromise<HealthnurseListResponse> {
            return localVarFp.nurseServiceList(paginatePage, paginatePerPage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {NurseServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nurseServiceUpdate(id: number, body: NurseServiceUpdateRequest, options?: any): AxiosPromise<HealthnurseUpdateResponse> {
            return localVarFp.nurseServiceUpdate(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NurseServiceApi - object-oriented interface
 * @export
 * @class NurseServiceApi
 * @extends {BaseAPI}
 */
export class NurseServiceApi extends BaseAPI {
    /**
     * 
     * @param {HealthnurseCreateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NurseServiceApi
     */
    public nurseServiceCreate(body: HealthnurseCreateRequest, options?: AxiosRequestConfig) {
        return NurseServiceApiFp(this.configuration).nurseServiceCreate(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NurseServiceApi
     */
    public nurseServiceDelete(id: number, options?: AxiosRequestConfig) {
        return NurseServiceApiFp(this.configuration).nurseServiceDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NurseServiceApi
     */
    public nurseServiceGet(id: number, options?: AxiosRequestConfig) {
        return NurseServiceApiFp(this.configuration).nurseServiceGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [paginatePage] 
     * @param {number} [paginatePerPage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NurseServiceApi
     */
    public nurseServiceList(paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig) {
        return NurseServiceApiFp(this.configuration).nurseServiceList(paginatePage, paginatePerPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {NurseServiceUpdateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NurseServiceApi
     */
    public nurseServiceUpdate(id: number, body: NurseServiceUpdateRequest, options?: AxiosRequestConfig) {
        return NurseServiceApiFp(this.configuration).nurseServiceUpdate(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}


