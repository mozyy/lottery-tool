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
 * @interface RecordRecord
 */
export interface RecordRecord {
    /**
     * 
     * @type {number}
     * @memberof RecordRecord
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof RecordRecord
     */
    lotteryId?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordRecord
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof RecordRecord
     */
    value?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RecordRecord
     */
    remarks?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof RecordRecord
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof RecordRecord
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the RecordRecord interface.
 */
export function instanceOfRecordRecord(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecordRecordFromJSON(json: any): RecordRecord {
    return RecordRecordFromJSONTyped(json, false);
}

export function RecordRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lotteryId': !exists(json, 'lotteryId') ? undefined : json['lotteryId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'remarks': !exists(json, 'remarks') ? undefined : json['remarks'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function RecordRecordToJSON(value?: RecordRecord | null): any {
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
        'value': value.value,
        'remarks': value.remarks,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

