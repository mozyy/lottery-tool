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
import type { RecordRecord } from './RecordRecord';
import {
    RecordRecordFromJSON,
    RecordRecordFromJSONTyped,
    RecordRecordToJSON,
} from './RecordRecord';

/**
 * 
 * @export
 * @interface RecordGetResponse
 */
export interface RecordGetResponse {
    /**
     * 
     * @type {RecordRecord}
     * @memberof RecordGetResponse
     */
    record?: RecordRecord;
}

/**
 * Check if a given object implements the RecordGetResponse interface.
 */
export function instanceOfRecordGetResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecordGetResponseFromJSON(json: any): RecordGetResponse {
    return RecordGetResponseFromJSONTyped(json, false);
}

export function RecordGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordGetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'record': !exists(json, 'record') ? undefined : RecordRecordFromJSON(json['record']),
    };
}

export function RecordGetResponseToJSON(value?: RecordGetResponse | null): any {
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
