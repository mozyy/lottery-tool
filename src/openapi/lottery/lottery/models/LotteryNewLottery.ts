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
 * @interface LotteryNewLottery
 */
export interface LotteryNewLottery {
    /**
     * 
     * @type {string}
     * @memberof LotteryNewLottery
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof LotteryNewLottery
     */
    title?: string;
    /**
     * 
     * @type {LotteryType}
     * @memberof LotteryNewLottery
     */
    type?: LotteryType;
    /**
     * 
     * @type {Array<LotteryItem>}
     * @memberof LotteryNewLottery
     */
    items?: Array<LotteryItem>;
    /**
     * 
     * @type {boolean}
     * @memberof LotteryNewLottery
     */
    remark?: boolean;
    /**
     * 
     * @type {Array<LotteryRemark>}
     * @memberof LotteryNewLottery
     */
    remarks?: Array<LotteryRemark>;
}

/**
 * Check if a given object implements the LotteryNewLottery interface.
 */
export function instanceOfLotteryNewLottery(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotteryNewLotteryFromJSON(json: any): LotteryNewLottery {
    return LotteryNewLotteryFromJSONTyped(json, false);
}

export function LotteryNewLotteryFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotteryNewLottery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'type': !exists(json, 'type') ? undefined : LotteryTypeFromJSON(json['type']),
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(LotteryItemFromJSON)),
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'remarks': !exists(json, 'remarks') ? undefined : ((json['remarks'] as Array<any>).map(LotteryRemarkFromJSON)),
    };
}

export function LotteryNewLotteryToJSON(value?: LotteryNewLottery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'title': value.title,
        'type': LotteryTypeToJSON(value.type),
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(LotteryItemToJSON)),
        'remark': value.remark,
        'remarks': value.remarks === undefined ? undefined : ((value.remarks as Array<any>).map(LotteryRemarkToJSON)),
    };
}

