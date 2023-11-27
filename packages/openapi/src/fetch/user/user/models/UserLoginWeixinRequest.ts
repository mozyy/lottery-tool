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
 * @interface UserLoginWeixinRequest
 */
export interface UserLoginWeixinRequest {
    /**
     * 
     * @type {string}
     * @memberof UserLoginWeixinRequest
     */
    code?: string;
}

/**
 * Check if a given object implements the UserLoginWeixinRequest interface.
 */
export function instanceOfUserLoginWeixinRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserLoginWeixinRequestFromJSON(json: any): UserLoginWeixinRequest {
    return UserLoginWeixinRequestFromJSONTyped(json, false);
}

export function UserLoginWeixinRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLoginWeixinRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function UserLoginWeixinRequestToJSON(value?: UserLoginWeixinRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
    };
}

