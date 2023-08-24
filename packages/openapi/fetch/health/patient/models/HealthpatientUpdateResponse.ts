/* tslint:disable */
/* eslint-disable */
/**
 * health/patient.proto
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
import type { PatientPatient } from './PatientPatient';
import {
    PatientPatientFromJSON,
    PatientPatientFromJSONTyped,
    PatientPatientToJSON,
} from './PatientPatient';

/**
 * 
 * @export
 * @interface HealthpatientUpdateResponse
 */
export interface HealthpatientUpdateResponse {
    /**
     * 
     * @type {PatientPatient}
     * @memberof HealthpatientUpdateResponse
     */
    patient?: PatientPatient;
}

/**
 * Check if a given object implements the HealthpatientUpdateResponse interface.
 */
export function instanceOfHealthpatientUpdateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HealthpatientUpdateResponseFromJSON(json: any): HealthpatientUpdateResponse {
    return HealthpatientUpdateResponseFromJSONTyped(json, false);
}

export function HealthpatientUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthpatientUpdateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'patient': !exists(json, 'patient') ? undefined : PatientPatientFromJSON(json['patient']),
    };
}

export function HealthpatientUpdateResponseToJSON(value?: HealthpatientUpdateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'patient': PatientPatientToJSON(value.patient),
    };
}

