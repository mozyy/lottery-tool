/* tslint:disable */
/* eslint-disable */
/**
 * auth/auth.proto
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
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatePaginate
     */
    perPage?: number;
}

/**
 * Check if a given object implements the PaginatePaginate interface.
 */
export function instanceOfPaginatePaginate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatePaginateFromJSON(json: any): PaginatePaginate {
    return PaginatePaginateFromJSONTyped(json, false);
}

export function PaginatePaginateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatePaginate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': !exists(json, 'page') ? undefined : json['page'],
        'perPage': !exists(json, 'perPage') ? undefined : json['perPage'],
    };
}

export function PaginatePaginateToJSON(value?: PaginatePaginate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page': value.page,
        'perPage': value.perPage,
    };
}

