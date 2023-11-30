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
 * @interface UserRegisterMobileRequest
 */
export interface UserRegisterMobileRequest {
    /**
     * 
     * @type {string}
     * @memberof UserRegisterMobileRequest
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRegisterMobileRequest
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRegisterMobileRequest
     */
    password?: string;
}

/**
 * Check if a given object implements the UserRegisterMobileRequest interface.
 */
export function instanceOfUserRegisterMobileRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserRegisterMobileRequestFromJSON(json: any): UserRegisterMobileRequest {
    return UserRegisterMobileRequestFromJSONTyped(json, false);
}

export function UserRegisterMobileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRegisterMobileRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function UserRegisterMobileRequestToJSON(value?: UserRegisterMobileRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientId': value.clientId,
        'mobile': value.mobile,
        'password': value.password,
    };
}

