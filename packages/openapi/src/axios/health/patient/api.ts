/* tslint:disable */
/* eslint-disable */
/**
 * health/patient.proto
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
 * @interface HealthpatientCreateRequest
 */
export interface HealthpatientCreateRequest {
    /**
     * 
     * @type {PatientNewPatient}
     * @memberof HealthpatientCreateRequest
     */
    'patient'?: PatientNewPatient;
}
/**
 * 
 * @export
 * @interface HealthpatientCreateResponse
 */
export interface HealthpatientCreateResponse {
    /**
     * 
     * @type {PatientPatient}
     * @memberof HealthpatientCreateResponse
     */
    'patient'?: PatientPatient;
}
/**
 * 
 * @export
 * @interface HealthpatientGetResponse
 */
export interface HealthpatientGetResponse {
    /**
     * 
     * @type {PatientPatient}
     * @memberof HealthpatientGetResponse
     */
    'patient'?: PatientPatient;
    /**
     * 
     * @type {HospitalHospital}
     * @memberof HealthpatientGetResponse
     */
    'hospital'?: HospitalHospital;
}
/**
 * 
 * @export
 * @interface HealthpatientListResponse
 */
export interface HealthpatientListResponse {
    /**
     * 
     * @type {Array<PatientPatient>}
     * @memberof HealthpatientListResponse
     */
    'patient'?: Array<PatientPatient>;
    /**
     * 
     * @type {PaginatePaginated}
     * @memberof HealthpatientListResponse
     */
    'paginated'?: PaginatePaginated;
}
/**
 * 
 * @export
 * @interface HealthpatientUpdateResponse
 */
export interface HealthpatientUpdateResponse {
    /**
     * 
     * @type {PatientPatient}
     * @memberof HealthpatientUpdateResponse
     */
    'patient'?: PatientPatient;
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
 * @interface PatientNewPatient
 */
export interface PatientNewPatient {
    /**
     * 
     * @type {string}
     * @memberof PatientNewPatient
     */
    'userId'?: string;
    /**
     * 
     * @type {number}
     * @memberof PatientNewPatient
     */
    'departmentId'?: number;
}
/**
 * 
 * @export
 * @interface PatientPatient
 */
export interface PatientPatient {
    /**
     * 
     * @type {number}
     * @memberof PatientPatient
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PatientPatient
     */
    'userId'?: string;
    /**
     * 
     * @type {number}
     * @memberof PatientPatient
     */
    'departmentId'?: number;
    /**
     * 
     * @type {string}
     * @memberof PatientPatient
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatientPatient
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface PatientServiceUpdateRequest
 */
export interface PatientServiceUpdateRequest {
    /**
     * 
     * @type {PatientNewPatient}
     * @memberof PatientServiceUpdateRequest
     */
    'patient'?: PatientNewPatient;
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
 * PatientServiceApi - axios parameter creator
 * @export
 */
export const PatientServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {HealthpatientCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patientServiceCreate: async (body: HealthpatientCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('patientServiceCreate', 'body', body)
            const localVarPath = `/health.patient.PatientService/patients`;
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
        patientServiceDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patientServiceDelete', 'id', id)
            const localVarPath = `/health.patient.PatientService/patients/{id}`
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
        patientServiceGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patientServiceGet', 'id', id)
            const localVarPath = `/health.patient.PatientService/patients/{id}`
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
        patientServiceList: async (paginatePage?: number, paginatePerPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/health.patient.PatientService/patients`;
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
         * @param {PatientServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patientServiceUpdate: async (id: number, body: PatientServiceUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patientServiceUpdate', 'id', id)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('patientServiceUpdate', 'body', body)
            const localVarPath = `/health.patient.PatientService/patients/{id}`
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
 * PatientServiceApi - functional programming interface
 * @export
 */
export const PatientServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PatientServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {HealthpatientCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patientServiceCreate(body: HealthpatientCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthpatientCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patientServiceCreate(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patientServiceDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patientServiceDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patientServiceGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthpatientGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patientServiceGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patientServiceList(paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthpatientListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patientServiceList(paginatePage, paginatePerPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {PatientServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patientServiceUpdate(id: number, body: PatientServiceUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthpatientUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patientServiceUpdate(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PatientServiceApi - factory interface
 * @export
 */
export const PatientServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PatientServiceApiFp(configuration)
    return {
        /**
         * 
         * @param {HealthpatientCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patientServiceCreate(body: HealthpatientCreateRequest, options?: any): AxiosPromise<HealthpatientCreateResponse> {
            return localVarFp.patientServiceCreate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patientServiceDelete(id: number, options?: any): AxiosPromise<object> {
            return localVarFp.patientServiceDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patientServiceGet(id: number, options?: any): AxiosPromise<HealthpatientGetResponse> {
            return localVarFp.patientServiceGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patientServiceList(paginatePage?: number, paginatePerPage?: number, options?: any): AxiosPromise<HealthpatientListResponse> {
            return localVarFp.patientServiceList(paginatePage, paginatePerPage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {PatientServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patientServiceUpdate(id: number, body: PatientServiceUpdateRequest, options?: any): AxiosPromise<HealthpatientUpdateResponse> {
            return localVarFp.patientServiceUpdate(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PatientServiceApi - object-oriented interface
 * @export
 * @class PatientServiceApi
 * @extends {BaseAPI}
 */
export class PatientServiceApi extends BaseAPI {
    /**
     * 
     * @param {HealthpatientCreateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PatientServiceApi
     */
    public patientServiceCreate(body: HealthpatientCreateRequest, options?: AxiosRequestConfig) {
        return PatientServiceApiFp(this.configuration).patientServiceCreate(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PatientServiceApi
     */
    public patientServiceDelete(id: number, options?: AxiosRequestConfig) {
        return PatientServiceApiFp(this.configuration).patientServiceDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PatientServiceApi
     */
    public patientServiceGet(id: number, options?: AxiosRequestConfig) {
        return PatientServiceApiFp(this.configuration).patientServiceGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [paginatePage] 
     * @param {number} [paginatePerPage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PatientServiceApi
     */
    public patientServiceList(paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig) {
        return PatientServiceApiFp(this.configuration).patientServiceList(paginatePage, paginatePerPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {PatientServiceUpdateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PatientServiceApi
     */
    public patientServiceUpdate(id: number, body: PatientServiceUpdateRequest, options?: AxiosRequestConfig) {
        return PatientServiceApiFp(this.configuration).patientServiceUpdate(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}


