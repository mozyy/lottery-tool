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
 * @interface AuthToken
 */
export interface AuthToken {
    /**
     * 
     * @type {string}
     * @memberof AuthToken
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthToken
     */
    tokenType?: string;
    /**
     * 
     * @type {number}
     * @memberof AuthToken
     */
    expiresIn?: number;
    /**
     * 
     * @type {string}
     * @memberof AuthToken
     */
    refreshToken?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthToken
     */
    scope?: string;
}

/**
 * Check if a given object implements the AuthToken interface.
 */
export function instanceOfAuthToken(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthTokenFromJSON(json: any): AuthToken {
    return AuthTokenFromJSONTyped(json, false);
}

export function AuthTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'tokenType': !exists(json, 'tokenType') ? undefined : json['tokenType'],
        'expiresIn': !exists(json, 'expiresIn') ? undefined : json['expiresIn'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
    };
}

export function AuthTokenToJSON(value?: AuthToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessToken': value.accessToken,
        'tokenType': value.tokenType,
        'expiresIn': value.expiresIn,
        'refreshToken': value.refreshToken,
        'scope': value.scope,
    };
}

