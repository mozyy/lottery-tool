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
 * @interface RecordUpdateResponse
 */
export interface RecordUpdateResponse {
    /**
     * 
     * @type {RecordRecord}
     * @memberof RecordUpdateResponse
     */
    record?: RecordRecord;
}

/**
 * Check if a given object implements the RecordUpdateResponse interface.
 */
export function instanceOfRecordUpdateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecordUpdateResponseFromJSON(json: any): RecordUpdateResponse {
    return RecordUpdateResponseFromJSONTyped(json, false);
}

export function RecordUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecordUpdateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'record': !exists(json, 'record') ? undefined : RecordRecordFromJSON(json['record']),
    };
}

export function RecordUpdateResponseToJSON(value?: RecordUpdateResponse | null): any {
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
