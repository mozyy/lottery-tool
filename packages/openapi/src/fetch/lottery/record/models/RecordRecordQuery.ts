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
 * @interface RecordRecordQuery
 */
export interface RecordRecordQuery {
    /**
     * 
     * @type {number}
     * @memberof RecordRecordQuery
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof RecordRecordQuery
     */
    lotteryId?: number;
    /**
     * 
     * @type {string}
     * @memberof RecordRecordQuery
     */
    userId?: string;
}

/**
 * Check if a given object implements the RecordRecordQuery interface.
 */
export function instanceOfRecordRecordQuery(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecordRecordQueryFromJSON(json: any): RecordRecordQuery {
    return RecordRecordQueryFromJSONTyped(json, false);
}

export function RecordRecordQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordRecordQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lotteryId': !exists(json, 'lotteryId') ? undefined : json['lotteryId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function RecordRecordQueryToJSON(value?: RecordRecordQuery | null): any {
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
    };
}

