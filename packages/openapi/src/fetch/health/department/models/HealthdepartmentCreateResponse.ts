/* tslint:disable */
/* eslint-disable */
/**
 * health/department.proto
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
import type { DepartmentHepartment } from './DepartmentHepartment';
import {
    DepartmentHepartmentFromJSON,
    DepartmentHepartmentFromJSONTyped,
    DepartmentHepartmentToJSON,
} from './DepartmentHepartment';

/**
 * 
 * @export
 * @interface HealthdepartmentCreateResponse
 */
export interface HealthdepartmentCreateResponse {
    /**
     * 
     * @type {DepartmentHepartment}
     * @memberof HealthdepartmentCreateResponse
     */
    department?: DepartmentHepartment;
}

/**
 * Check if a given object implements the HealthdepartmentCreateResponse interface.
 */
export function instanceOfHealthdepartmentCreateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HealthdepartmentCreateResponseFromJSON(json: any): HealthdepartmentCreateResponse {
    return HealthdepartmentCreateResponseFromJSONTyped(json, false);
}

export function HealthdepartmentCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthdepartmentCreateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'department': !exists(json, 'department') ? undefined : DepartmentHepartmentFromJSON(json['department']),
    };
}

export function HealthdepartmentCreateResponseToJSON(value?: HealthdepartmentCreateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'department': DepartmentHepartmentToJSON(value.department),
    };
}

