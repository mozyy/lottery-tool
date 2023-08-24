/* tslint:disable */
/* eslint-disable */
/**
 * health/nurse.proto
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
import type { NurseNewNurse } from './NurseNewNurse';
import {
    NurseNewNurseFromJSON,
    NurseNewNurseFromJSONTyped,
    NurseNewNurseToJSON,
} from './NurseNewNurse';

/**
 * 
 * @export
 * @interface HealthnurseCreateRequest
 */
export interface HealthnurseCreateRequest {
    /**
     * 
     * @type {NurseNewNurse}
     * @memberof HealthnurseCreateRequest
     */
    nurse?: NurseNewNurse;
}

/**
 * Check if a given object implements the HealthnurseCreateRequest interface.
 */
export function instanceOfHealthnurseCreateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HealthnurseCreateRequestFromJSON(json: any): HealthnurseCreateRequest {
    return HealthnurseCreateRequestFromJSONTyped(json, false);
}

export function HealthnurseCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthnurseCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nurse': !exists(json, 'nurse') ? undefined : NurseNewNurseFromJSON(json['nurse']),
    };
}

export function HealthnurseCreateRequestToJSON(value?: HealthnurseCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nurse': NurseNewNurseToJSON(value.nurse),
    };
}

