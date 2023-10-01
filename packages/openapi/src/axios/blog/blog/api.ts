/* tslint:disable */
/* eslint-disable */
/**
 * blog/blog.proto
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
 * @interface BlogBlog
 */
export interface BlogBlog {
    /**
     * 
     * @type {number}
     * @memberof BlogBlog
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof BlogBlog
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogBlog
     */
    'image'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogBlog
     */
    'summary'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogBlog
     */
    'markdown'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogBlog
     */
    'author'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogBlog
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogBlog
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface BlogNewBlog
 */
export interface BlogNewBlog {
    /**
     * 
     * @type {string}
     * @memberof BlogNewBlog
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogNewBlog
     */
    'image'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogNewBlog
     */
    'summary'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogNewBlog
     */
    'markdown'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogNewBlog
     */
    'author'?: string;
}
/**
 * 
 * @export
 * @interface BlogServiceUpdateRequest
 */
export interface BlogServiceUpdateRequest {
    /**
     * 
     * @type {BlogNewBlog}
     * @memberof BlogServiceUpdateRequest
     */
    'blog'?: BlogNewBlog;
}
/**
 * 
 * @export
 * @interface BlogblogCreateRequest
 */
export interface BlogblogCreateRequest {
    /**
     * 
     * @type {BlogNewBlog}
     * @memberof BlogblogCreateRequest
     */
    'blog'?: BlogNewBlog;
}
/**
 * 
 * @export
 * @interface BlogblogCreateResponse
 */
export interface BlogblogCreateResponse {
    /**
     * 
     * @type {BlogBlog}
     * @memberof BlogblogCreateResponse
     */
    'blog'?: BlogBlog;
}
/**
 * 
 * @export
 * @interface BlogblogGetResponse
 */
export interface BlogblogGetResponse {
    /**
     * 
     * @type {BlogBlog}
     * @memberof BlogblogGetResponse
     */
    'blog'?: BlogBlog;
}
/**
 * 
 * @export
 * @interface BlogblogListResponse
 */
export interface BlogblogListResponse {
    /**
     * 
     * @type {Array<BlogBlog>}
     * @memberof BlogblogListResponse
     */
    'blogs'?: Array<BlogBlog>;
    /**
     * 
     * @type {PaginatePaginated}
     * @memberof BlogblogListResponse
     */
    'paginated'?: PaginatePaginated;
}
/**
 * 
 * @export
 * @interface BlogblogUpdateResponse
 */
export interface BlogblogUpdateResponse {
    /**
     * 
     * @type {BlogBlog}
     * @memberof BlogblogUpdateResponse
     */
    'blog'?: BlogBlog;
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
 * BlogServiceApi - axios parameter creator
 * @export
 */
export const BlogServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {BlogblogCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogServiceCreate: async (body: BlogblogCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('blogServiceCreate', 'body', body)
            const localVarPath = `/blog.blog.BlogService/blogs`;
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
        blogServiceDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('blogServiceDelete', 'id', id)
            const localVarPath = `/blog.blog.BlogService/blogs/{id}`
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
        blogServiceGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('blogServiceGet', 'id', id)
            const localVarPath = `/blog.blog.BlogService/blogs/{id}`
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
        blogServiceList: async (paginatePage?: number, paginatePerPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/blog.blog.BlogService/blogs`;
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
         * @param {BlogServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogServiceUpdate: async (id: number, body: BlogServiceUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('blogServiceUpdate', 'id', id)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('blogServiceUpdate', 'body', body)
            const localVarPath = `/blog.blog.BlogService/blogs/{id}`
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
 * BlogServiceApi - functional programming interface
 * @export
 */
export const BlogServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BlogServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {BlogblogCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async blogServiceCreate(body: BlogblogCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlogblogCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.blogServiceCreate(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async blogServiceDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.blogServiceDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async blogServiceGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlogblogGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.blogServiceGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async blogServiceList(paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlogblogListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.blogServiceList(paginatePage, paginatePerPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {BlogServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async blogServiceUpdate(id: number, body: BlogServiceUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlogblogUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.blogServiceUpdate(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BlogServiceApi - factory interface
 * @export
 */
export const BlogServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BlogServiceApiFp(configuration)
    return {
        /**
         * 
         * @param {BlogblogCreateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogServiceCreate(body: BlogblogCreateRequest, options?: any): AxiosPromise<BlogblogCreateResponse> {
            return localVarFp.blogServiceCreate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogServiceDelete(id: number, options?: any): AxiosPromise<object> {
            return localVarFp.blogServiceDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogServiceGet(id: number, options?: any): AxiosPromise<BlogblogGetResponse> {
            return localVarFp.blogServiceGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [paginatePage] 
         * @param {number} [paginatePerPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogServiceList(paginatePage?: number, paginatePerPage?: number, options?: any): AxiosPromise<BlogblogListResponse> {
            return localVarFp.blogServiceList(paginatePage, paginatePerPage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {BlogServiceUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blogServiceUpdate(id: number, body: BlogServiceUpdateRequest, options?: any): AxiosPromise<BlogblogUpdateResponse> {
            return localVarFp.blogServiceUpdate(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BlogServiceApi - object-oriented interface
 * @export
 * @class BlogServiceApi
 * @extends {BaseAPI}
 */
export class BlogServiceApi extends BaseAPI {
    /**
     * 
     * @param {BlogblogCreateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogServiceApi
     */
    public blogServiceCreate(body: BlogblogCreateRequest, options?: AxiosRequestConfig) {
        return BlogServiceApiFp(this.configuration).blogServiceCreate(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogServiceApi
     */
    public blogServiceDelete(id: number, options?: AxiosRequestConfig) {
        return BlogServiceApiFp(this.configuration).blogServiceDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogServiceApi
     */
    public blogServiceGet(id: number, options?: AxiosRequestConfig) {
        return BlogServiceApiFp(this.configuration).blogServiceGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [paginatePage] 
     * @param {number} [paginatePerPage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogServiceApi
     */
    public blogServiceList(paginatePage?: number, paginatePerPage?: number, options?: AxiosRequestConfig) {
        return BlogServiceApiFp(this.configuration).blogServiceList(paginatePage, paginatePerPage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {BlogServiceUpdateRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogServiceApi
     */
    public blogServiceUpdate(id: number, body: BlogServiceUpdateRequest, options?: AxiosRequestConfig) {
        return BlogServiceApiFp(this.configuration).blogServiceUpdate(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}


