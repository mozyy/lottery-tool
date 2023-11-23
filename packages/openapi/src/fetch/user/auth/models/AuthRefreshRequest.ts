/* tslint:disable */
/* eslint-disable */
/**
 * user/auth.proto
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
 * @interface AuthRefreshRequest
 */
export interface AuthRefreshRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthRefreshRequest
     */
    grantType?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthRefreshRequest
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the AuthRefreshRequest interface.
 */
export function instanceOfAuthRefreshRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthRefreshRequestFromJSON(json: any): AuthRefreshRequest {
    return AuthRefreshRequestFromJSONTyped(json, false);
}

export function AuthRefreshRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthRefreshRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'grantType': !exists(json, 'grantType') ? undefined : json['grantType'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function AuthRefreshRequestToJSON(value?: AuthRefreshRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'grantType': value.grantType,
        'refreshToken': value.refreshToken,
    };
}

