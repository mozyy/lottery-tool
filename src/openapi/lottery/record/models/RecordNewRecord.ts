/* tslint:disable */
/* eslint-disable */
/**
 * record.proto
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
 * @interface RecordNewRecord
 */
export interface RecordNewRecord {
    /**
     * 
     * @type {number}
     * @memberof RecordNewRecord
     */
    lotteryId?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordNewRecord
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordNewRecord
     */
    value?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RecordNewRecord
     */
    remarks?: Array<string>;
}

/**
 * Check if a given object implements the RecordNewRecord interface.
 */
export function instanceOfRecordNewRecord(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecordNewRecordFromJSON(json: any): RecordNewRecord {
    return RecordNewRecordFromJSONTyped(json, false);
}

export function RecordNewRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordNewRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lotteryId': !exists(json, 'lotteryId') ? undefined : json['lotteryId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'remarks': !exists(json, 'remarks') ? undefined : json['remarks'],
    };
}

export function RecordNewRecordToJSON(value?: RecordNewRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lotteryId': value.lotteryId,
        'userId': value.userId,
        'value': value.value,
        'remarks': value.remarks,
    };
}

