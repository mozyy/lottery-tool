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

import { exists, mapValues } from '../runtime';
import type { BlogBlog } from './BlogBlog';
import {
    BlogBlogFromJSON,
    BlogBlogFromJSONTyped,
    BlogBlogToJSON,
} from './BlogBlog';

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
    blogs?: Array<BlogBlog>;
}

/**
 * Check if a given object implements the BlogblogListResponse interface.
 */
export function instanceOfBlogblogListResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlogblogListResponseFromJSON(json: any): BlogblogListResponse {
    return BlogblogListResponseFromJSONTyped(json, false);
}

export function BlogblogListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogblogListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blogs': !exists(json, 'blogs') ? undefined : ((json['blogs'] as Array<any>).map(BlogBlogFromJSON)),
    };
}

export function BlogblogListResponseToJSON(value?: BlogblogListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blogs': value.blogs === undefined ? undefined : ((value.blogs as Array<any>).map(BlogBlogToJSON)),
    };
}

