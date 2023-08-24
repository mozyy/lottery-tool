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
import type { RecordRecord } from './RecordRecord';
import {
    RecordRecordFromJSON,
    RecordRecordFromJSONTyped,
    RecordRecordToJSON,
} from './RecordRecord';

/**
 * 
 * @export
 * @interface LotteryrecordGetResponse
 */
export interface LotteryrecordGetResponse {
    /**
     * 
     * @type {RecordRecord}
     * @memberof LotteryrecordGetResponse
     */
    record?: RecordRecord;
}

/**
 * Check if a given object implements the LotteryrecordGetResponse interface.
 */
export function instanceOfLotteryrecordGetResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotteryrecordGetResponseFromJSON(json: any): LotteryrecordGetResponse {
    return LotteryrecordGetResponseFromJSONTyped(json, false);
}

export function LotteryrecordGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotteryrecordGetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'record': !exists(json, 'record') ? undefined : RecordRecordFromJSON(json['record']),
    };
}

export function LotteryrecordGetResponseToJSON(value?: LotteryrecordGetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'record': RecordRecordToJSON(value.record),
    };
}

