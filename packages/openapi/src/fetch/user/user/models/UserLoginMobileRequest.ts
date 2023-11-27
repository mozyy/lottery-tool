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
 * @interface UserLoginMobileRequest
 */
export interface UserLoginMobileRequest {
    /**
     * 
     * @type {string}
     * @memberof UserLoginMobileRequest
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof UserLoginMobileRequest
     */
    password?: string;
}

/**
 * Check if a given object implements the UserLoginMobileRequest interface.
 */
export function instanceOfUserLoginMobileRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserLoginMobileRequestFromJSON(json: any): UserLoginMobileRequest {
    return UserLoginMobileRequestFromJSONTyped(json, false);
}

export function UserLoginMobileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLoginMobileRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function UserLoginMobileRequestToJSON(value?: UserLoginMobileRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mobile': value.mobile,
        'password': value.password,
    };
}

