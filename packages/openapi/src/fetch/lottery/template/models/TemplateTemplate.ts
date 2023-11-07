/* tslint:disable */
/* eslint-disable */
/**
 * lottery/template.proto
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
 * @interface TemplateTemplate
 */
export interface TemplateTemplate {
    /**
     * 
     * @type {number}
     * @memberof TemplateTemplate
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof TemplateTemplate
     */
    lotteryId?: number;
    /**
     * 
     * @type {Date}
     * @memberof TemplateTemplate
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TemplateTemplate
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the TemplateTemplate interface.
 */
export function instanceOfTemplateTemplate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateTemplateFromJSON(json: any): TemplateTemplate {
    return TemplateTemplateFromJSONTyped(json, false);
}

export function TemplateTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lotteryId': !exists(json, 'lotteryId') ? undefined : json['lotteryId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function TemplateTemplateToJSON(value?: TemplateTemplate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'lotteryId': value.lotteryId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}
