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
/**
 * 
 * @export
 * @interface DepartmentNewHepartment
 */
export interface DepartmentNewHepartment {
    /**
     * 
     * @type {number}
     * @memberof DepartmentNewHepartment
     */
    hospitalId?: number;
    /**
     * 
     * @type {string}
     * @memberof DepartmentNewHepartment
     */
    name?: string;
}

/**
 * Check if a given object implements the DepartmentNewHepartment interface.
 */
export function instanceOfDepartmentNewHepartment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DepartmentNewHepartmentFromJSON(json: any): DepartmentNewHepartment {
    return DepartmentNewHepartmentFromJSONTyped(json, false);
}

export function DepartmentNewHepartmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepartmentNewHepartment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hospitalId': !exists(json, 'hospitalId') ? undefined : json['hospitalId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function DepartmentNewHepartmentToJSON(value?: DepartmentNewHepartment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hospitalId': value.hospitalId,
        'name': value.name,
    };
}
