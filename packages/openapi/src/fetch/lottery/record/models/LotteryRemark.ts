/* tslint:disable */
/* eslint-disable */
/**
 * lottery/record.proto
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
 * @interface LotteryRemark
 */
export interface LotteryRemark {
    /**
     * 
     * @type {number}
     * @memberof LotteryRemark
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof LotteryRemark
     */
    lotteryId?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryRemark
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LotteryRemark
     */
    require?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof LotteryRemark
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof LotteryRemark
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the LotteryRemark interface.
 */
export function instanceOfLotteryRemark(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotteryRemarkFromJSON(json: any): LotteryRemark {
    return LotteryRemarkFromJSONTyped(json, false);
}

export function LotteryRemarkFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotteryRemark {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lotteryId': !exists(json, 'lotteryId') ? undefined : json['lotteryId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'require': !exists(json, 'require') ? undefined : json['require'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function LotteryRemarkToJSON(value?: LotteryRemark | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'lotteryId': value.lotteryId,
        'name': value.name,
        'require': value.require,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}
