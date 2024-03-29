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
 * @interface UserUser
 */
export interface UserUser {
    /**
     * 
     * @type {string}
     * @memberof UserUser
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof UserUser
     */
    infoId?: number;
    /**
     * 
     * @type {number}
     * @memberof UserUser
     */
    mobileId?: number;
    /**
     * 
     * @type {number}
     * @memberof UserUser
     */
    weixinId?: number;
    /**
     * 
     * @type {Date}
     * @memberof UserUser
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserUser
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the UserUser interface.
 */
export function instanceOfUserUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserUserFromJSON(json: any): UserUser {
    return UserUserFromJSONTyped(json, false);
}

export function UserUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'infoId': !exists(json, 'infoId') ? undefined : json['infoId'],
        'mobileId': !exists(json, 'mobileId') ? undefined : json['mobileId'],
        'weixinId': !exists(json, 'weixinId') ? undefined : json['weixinId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function UserUserToJSON(value?: UserUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'infoId': value.infoId,
        'mobileId': value.mobileId,
        'weixinId': value.weixinId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

