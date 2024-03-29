/* tslint:disable */
/* eslint-disable */
/**
 * user/user.proto
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
 * @interface UseruserInfo
 */
export interface UseruserInfo {
    /**
     * 
     * @type {number}
     * @memberof UseruserInfo
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UseruserInfo
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof UseruserInfo
     */
    avatar?: number;
    /**
     * 
     * @type {Date}
     * @memberof UseruserInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UseruserInfo
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the UseruserInfo interface.
 */
export function instanceOfUseruserInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UseruserInfoFromJSON(json: any): UseruserInfo {
    return UseruserInfoFromJSONTyped(json, false);
}

export function UseruserInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UseruserInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function UseruserInfoToJSON(value?: UseruserInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'avatar': value.avatar,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

