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
import type { NurseNurse } from './NurseNurse';
import {
    NurseNurseFromJSON,
    NurseNurseFromJSONTyped,
    NurseNurseToJSON,
} from './NurseNurse';
import type { PaginatePaginated } from './PaginatePaginated';
import {
    PaginatePaginatedFromJSON,
    PaginatePaginatedFromJSONTyped,
    PaginatePaginatedToJSON,
} from './PaginatePaginated';

/**
 * 
 * @export
 * @interface HealthnurseListResponse
 */
export interface HealthnurseListResponse {
    /**
     * 
     * @type {Array<NurseNurse>}
     * @memberof HealthnurseListResponse
     */
    nurse?: Array<NurseNurse>;
    /**
     * 
     * @type {PaginatePaginated}
     * @memberof HealthnurseListResponse
     */
    paginated?: PaginatePaginated;
}

/**
 * Check if a given object implements the HealthnurseListResponse interface.
 */
export function instanceOfHealthnurseListResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HealthnurseListResponseFromJSON(json: any): HealthnurseListResponse {
    return HealthnurseListResponseFromJSONTyped(json, false);
}

export function HealthnurseListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthnurseListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nurse': !exists(json, 'nurse') ? undefined : ((json['nurse'] as Array<any>).map(NurseNurseFromJSON)),
        'paginated': !exists(json, 'paginated') ? undefined : PaginatePaginatedFromJSON(json['paginated']),
    };
}

export function HealthnurseListResponseToJSON(value?: HealthnurseListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nurse': value.nurse === undefined ? undefined : ((value.nurse as Array<any>).map(NurseNurseToJSON)),
        'paginated': PaginatePaginatedToJSON(value.paginated),
    };
}

