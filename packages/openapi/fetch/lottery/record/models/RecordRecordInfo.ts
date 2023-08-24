/* tslint:disable */
/* eslint-disable */
/**
 * lottery/record.proto
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
 * @interface RecordRecordInfo
 */
export interface RecordRecordInfo {
    /**
     * 
     * @type {number}
     * @memberof RecordRecordInfo
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof RecordRecordInfo
     */
    lotteryId?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordRecordInfo
     */
    userId?: string;
    /**
     * 
     * @type {number}
     * @memberof RecordRecordInfo
     */
    itemId?: number;
    /**
     * 
     * @type {Date}
     * @memberof RecordRecordInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof RecordRecordInfo
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the RecordRecordInfo interface.
 */
export function instanceOfRecordRecordInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecordRecordInfoFromJSON(json: any): RecordRecordInfo {
    return RecordRecordInfoFromJSONTyped(json, false);
}

export function RecordRecordInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordRecordInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lotteryId': !exists(json, 'lotteryId') ? undefined : json['lotteryId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'itemId': !exists(json, 'itemId') ? undefined : json['itemId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function RecordRecordInfoToJSON(value?: RecordRecordInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'lotteryId': value.lotteryId,
        'userId': value.userId,
        'itemId': value.itemId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

