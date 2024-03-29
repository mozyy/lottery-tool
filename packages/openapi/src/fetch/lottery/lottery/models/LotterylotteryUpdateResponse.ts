/* tslint:disable */
/* eslint-disable */
/**
 * lottery/lottery.proto
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
import type { LotteryLottery } from './LotteryLottery';
import {
    LotteryLotteryFromJSON,
    LotteryLotteryFromJSONTyped,
    LotteryLotteryToJSON,
} from './LotteryLottery';

/**
 * 
 * @export
 * @interface LotterylotteryUpdateResponse
 */
export interface LotterylotteryUpdateResponse {
    /**
     * 
     * @type {LotteryLottery}
     * @memberof LotterylotteryUpdateResponse
     */
    lottery?: LotteryLottery;
}

/**
 * Check if a given object implements the LotterylotteryUpdateResponse interface.
 */
export function instanceOfLotterylotteryUpdateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotterylotteryUpdateResponseFromJSON(json: any): LotterylotteryUpdateResponse {
    return LotterylotteryUpdateResponseFromJSONTyped(json, false);
}

export function LotterylotteryUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotterylotteryUpdateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lottery': !exists(json, 'lottery') ? undefined : LotteryLotteryFromJSON(json['lottery']),
    };
}

export function LotterylotteryUpdateResponseToJSON(value?: LotterylotteryUpdateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lottery': LotteryLotteryToJSON(value.lottery),
    };
}

