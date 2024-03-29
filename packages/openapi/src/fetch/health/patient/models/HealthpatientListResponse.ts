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
import type { PaginatePaginated } from './PaginatePaginated';
import {
    PaginatePaginatedFromJSON,
    PaginatePaginatedFromJSONTyped,
    PaginatePaginatedToJSON,
} from './PaginatePaginated';
import type { PatientPatient } from './PatientPatient';
import {
    PatientPatientFromJSON,
    PatientPatientFromJSONTyped,
    PatientPatientToJSON,
} from './PatientPatient';

/**
 * 
 * @export
 * @interface HealthpatientListResponse
 */
export interface HealthpatientListResponse {
    /**
     * 
     * @type {Array<PatientPatient>}
     * @memberof HealthpatientListResponse
     */
    patient?: Array<PatientPatient>;
    /**
     * 
     * @type {PaginatePaginated}
     * @memberof HealthpatientListResponse
     */
    paginated?: PaginatePaginated;
}

/**
 * Check if a given object implements the HealthpatientListResponse interface.
 */
export function instanceOfHealthpatientListResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HealthpatientListResponseFromJSON(json: any): HealthpatientListResponse {
    return HealthpatientListResponseFromJSONTyped(json, false);
}

export function HealthpatientListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthpatientListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'patient': !exists(json, 'patient') ? undefined : ((json['patient'] as Array<any>).map(PatientPatientFromJSON)),
        'paginated': !exists(json, 'paginated') ? undefined : PaginatePaginatedFromJSON(json['paginated']),
    };
}

export function HealthpatientListResponseToJSON(value?: HealthpatientListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'patient': value.patient === undefined ? undefined : ((value.patient as Array<any>).map(PatientPatientToJSON)),
        'paginated': PaginatePaginatedToJSON(value.paginated),
    };
}

