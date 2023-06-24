/* tslint:disable */
/* eslint-disable */
/**
 * lottery.proto
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
import type { LotteryItem } from './LotteryItem';
import {
    LotteryItemFromJSON,
    LotteryItemFromJSONTyped,
    LotteryItemToJSON,
} from './LotteryItem';
import type { LotteryRemark } from './LotteryRemark';
import {
    LotteryRemarkFromJSON,
    LotteryRemarkFromJSONTyped,
    LotteryRemarkToJSON,
} from './LotteryRemark';
import type { LotteryType } from './LotteryType';
import {
    LotteryTypeFromJSON,
    LotteryTypeFromJSONTyped,
    LotteryTypeToJSON,
} from './LotteryType';

/**
 * 
 * @export
 * @interface LotteryLottery
 */
export interface LotteryLottery {
    /**
     * 
     * @type {number}
     * @memberof LotteryLottery
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof LotteryLottery
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof LotteryLottery
     */
    title?: string;
    /**
     * 
     * @type {LotteryType}
     * @memberof LotteryLottery
     */
    type?: LotteryType;
    /**
     * 
     * @type {Array<LotteryItem>}
     * @memberof LotteryLottery
     */
    items?: Array<LotteryItem>;
    /**
     * 
     * @type {boolean}
     * @memberof LotteryLottery
     */
    remark?: boolean;
    /**
     * 
     * @type {Array<LotteryRemark>}
     * @memberof LotteryLottery
     */
    remarks?: Array<LotteryRemark>;
    /**
     * 
     * @type {Date}
     * @memberof LotteryLottery
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof LotteryLottery
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the LotteryLottery interface.
 */
export function instanceOfLotteryLottery(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotteryLotteryFromJSON(json: any): LotteryLottery {
    return LotteryLotteryFromJSONTyped(json, false);
}

export function LotteryLotteryFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotteryLottery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'type': !exists(json, 'type') ? undefined : LotteryTypeFromJSON(json['type']),
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(LotteryItemFromJSON)),
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'remarks': !exists(json, 'remarks') ? undefined : ((json['remarks'] as Array<any>).map(LotteryRemarkFromJSON)),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function LotteryLotteryToJSON(value?: LotteryLottery | null): any {
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
        'type': LotteryTypeToJSON(value.type),
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(LotteryItemToJSON)),
        'remark': value.remark,
        'remarks': value.remarks === undefined ? undefined : ((value.remarks as Array<any>).map(LotteryRemarkToJSON)),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

