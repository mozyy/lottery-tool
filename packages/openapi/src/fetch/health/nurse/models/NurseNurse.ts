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
/**
 * 
 * @export
 * @interface NurseNurse
 */
export interface NurseNurse {
    /**
     * 
     * @type {number}
     * @memberof NurseNurse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof NurseNurse
     */
    userId?: string;
    /**
     * 
     * @type {number}
     * @memberof NurseNurse
     */
    departmentId?: number;
    /**
     * 
     * @type {Date}
     * @memberof NurseNurse
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof NurseNurse
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the NurseNurse interface.
 */
export function instanceOfNurseNurse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NurseNurseFromJSON(json: any): NurseNurse {
    return NurseNurseFromJSONTyped(json, false);
}

export function NurseNurseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NurseNurse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'departmentId': !exists(json, 'departmentId') ? undefined : json['departmentId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function NurseNurseToJSON(value?: NurseNurse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'departmentId': value.departmentId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}
