/* tslint:disable */
/* eslint-disable */
/**
 * lottery/favorite.proto
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
import type { LotterylotteryType } from './LotterylotteryType';
import {
    LotterylotteryTypeFromJSON,
    LotterylotteryTypeFromJSONTyped,
    LotterylotteryTypeToJSON,
} from './LotterylotteryType';

/**
 * 
 * @export
 * @interface LotteryLotteryInfo
 */
export interface LotteryLotteryInfo {
    /**
     * 
     * @type {number}
     * @memberof LotteryLotteryInfo
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryLotteryInfo
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof LotteryLotteryInfo
     */
    title?: string;
    /**
     * 
     * @type {LotterylotteryType}
     * @memberof LotteryLotteryInfo
     */
    type?: LotterylotteryType;
    /**
     * 
     * @type {boolean}
     * @memberof LotteryLotteryInfo
     */
    remark?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof LotteryLotteryInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof LotteryLotteryInfo
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the LotteryLotteryInfo interface.
 */
export function instanceOfLotteryLotteryInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotteryLotteryInfoFromJSON(json: any): LotteryLotteryInfo {
    return LotteryLotteryInfoFromJSONTyped(json, false);
}

export function LotteryLotteryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotteryLotteryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'type': !exists(json, 'type') ? undefined : LotterylotteryTypeFromJSON(json['type']),
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function LotteryLotteryInfoToJSON(value?: LotteryLotteryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'title': value.title,
        'type': LotterylotteryTypeToJSON(value.type),
        'remark': value.remark,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

