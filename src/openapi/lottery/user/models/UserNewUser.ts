/* tslint:disable */
/* eslint-disable */
/**
 * user.proto
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
 * @interface UserNewUser
 */
export interface UserNewUser {
    /**
     * 
     * @type {string}
     * @memberof UserNewUser
     */
    openid?: string;
    /**
     * 
     * @type {string}
     * @memberof UserNewUser
     */
    unionid?: string;
    /**
     * 
     * @type {string}
     * @memberof UserNewUser
     */
    sessionKey?: string;
    /**
     * 
     * @type {string}
     * @memberof UserNewUser
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserNewUser
     */
    avatar?: string;
    /**
     * 
     * @type {string}
     * @memberof UserNewUser
     */
    mobile?: string;
}

/**
 * Check if a given object implements the UserNewUser interface.
 */
export function instanceOfUserNewUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserNewUserFromJSON(json: any): UserNewUser {
    return UserNewUserFromJSONTyped(json, false);
}

export function UserNewUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserNewUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'openid': !exists(json, 'openid') ? undefined : json['openid'],
        'unionid': !exists(json, 'unionid') ? undefined : json['unionid'],
        'sessionKey': !exists(json, 'sessionKey') ? undefined : json['sessionKey'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
    };
}

export function UserNewUserToJSON(value?: UserNewUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'openid': value.openid,
        'unionid': value.unionid,
        'sessionKey': value.sessionKey,
        'name': value.name,
        'avatar': value.avatar,
        'mobile': value.mobile,
    };
}

