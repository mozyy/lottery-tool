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
 * @interface RecordNewRecordInfo
 */
export interface RecordNewRecordInfo {
    /**
     * 
     * @type {number}
     * @memberof RecordNewRecordInfo
     */
    lotteryId?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordNewRecordInfo
     */
    userId?: string;
    /**
     * 
     * @type {number}
     * @memberof RecordNewRecordInfo
     */
    itemId?: number;
}

/**
 * Check if a given object implements the RecordNewRecordInfo interface.
 */
export function instanceOfRecordNewRecordInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecordNewRecordInfoFromJSON(json: any): RecordNewRecordInfo {
    return RecordNewRecordInfoFromJSONTyped(json, false);
}

export function RecordNewRecordInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordNewRecordInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lotteryId': !exists(json, 'lotteryId') ? undefined : json['lotteryId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'itemId': !exists(json, 'itemId') ? undefined : json['itemId'],
    };
}

export function RecordNewRecordInfoToJSON(value?: RecordNewRecordInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lotteryId': value.lotteryId,
        'userId': value.userId,
        'itemId': value.itemId,
    };
}

