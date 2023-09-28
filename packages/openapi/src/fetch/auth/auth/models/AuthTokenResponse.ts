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
import type { AuthToken } from './AuthToken';
import {
    AuthTokenFromJSON,
    AuthTokenFromJSONTyped,
    AuthTokenToJSON,
} from './AuthToken';

/**
 * 
 * @export
 * @interface AuthTokenResponse
 */
export interface AuthTokenResponse {
    /**
     * 
     * @type {AuthToken}
     * @memberof AuthTokenResponse
     */
    token?: AuthToken;
}

/**
 * Check if a given object implements the AuthTokenResponse interface.
 */
export function instanceOfAuthTokenResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthTokenResponseFromJSON(json: any): AuthTokenResponse {
    return AuthTokenResponseFromJSONTyped(json, false);
}

export function AuthTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : AuthTokenFromJSON(json['token']),
    };
}

export function AuthTokenResponseToJSON(value?: AuthTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': AuthTokenToJSON(value.token),
    };
}
