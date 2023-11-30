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
 * @interface AuthTokenRequest
 */
export interface AuthTokenRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthTokenRequest
     */
    grantType?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthTokenRequest
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthTokenRequest
     */
    redirectUri?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthTokenRequest
     */
    clientId?: string;
}

/**
 * Check if a given object implements the AuthTokenRequest interface.
 */
export function instanceOfAuthTokenRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthTokenRequestFromJSON(json: any): AuthTokenRequest {
    return AuthTokenRequestFromJSONTyped(json, false);
}

export function AuthTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthTokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'grantType': !exists(json, 'grantType') ? undefined : json['grantType'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'redirectUri': !exists(json, 'redirectUri') ? undefined : json['redirectUri'],
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
    };
}

export function AuthTokenRequestToJSON(value?: AuthTokenRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'grantType': value.grantType,
        'code': value.code,
        'redirectUri': value.redirectUri,
        'clientId': value.clientId,
    };
}
