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
 * @interface BlogblogCreateResponse
 */
export interface BlogblogCreateResponse {
    /**
     * 
     * @type {BlogBlog}
     * @memberof BlogblogCreateResponse
     */
    blog?: BlogBlog;
}

/**
 * Check if a given object implements the BlogblogCreateResponse interface.
 */
export function instanceOfBlogblogCreateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlogblogCreateResponseFromJSON(json: any): BlogblogCreateResponse {
    return BlogblogCreateResponseFromJSONTyped(json, false);
}

export function BlogblogCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogblogCreateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blog': !exists(json, 'blog') ? undefined : BlogBlogFromJSON(json['blog']),
    };
}

export function BlogblogCreateResponseToJSON(value?: BlogblogCreateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blog': BlogBlogToJSON(value.blog),
    };
}

