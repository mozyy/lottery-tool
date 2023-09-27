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
 * @interface AuthClient
 */
export interface AuthClient {
    /**
     * 
     * @type {string}
     * @memberof AuthClient
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthClient
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthClient
     */
    redirectUri?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthClient
     */
    defaultScope?: string;
    /**
     * 
     * @type {number}
     * @memberof AuthClient
     */
    defaultExpiresIn?: number;
    /**
     * 
     * @type {string}
     * @memberof AuthClient
     */
    passdata?: string;
    /**
     * 
     * @type {Date}
     * @memberof AuthClient
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AuthClient
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the AuthClient interface.
 */
export function instanceOfAuthClient(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthClientFromJSON(json: any): AuthClient {
    return AuthClientFromJSONTyped(json, false);
}

export function AuthClientFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthClient {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'redirectUri': !exists(json, 'redirectUri') ? undefined : json['redirectUri'],
        'defaultScope': !exists(json, 'defaultScope') ? undefined : json['defaultScope'],
        'defaultExpiresIn': !exists(json, 'defaultExpiresIn') ? undefined : json['defaultExpiresIn'],
        'passdata': !exists(json, 'passdata') ? undefined : json['passdata'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function AuthClientToJSON(value?: AuthClient | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'redirectUri': value.redirectUri,
        'defaultScope': value.defaultScope,
        'defaultExpiresIn': value.defaultExpiresIn,
        'passdata': value.passdata,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

