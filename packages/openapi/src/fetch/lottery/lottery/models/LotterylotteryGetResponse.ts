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
 * @interface LotterylotteryGetResponse
 */
export interface LotterylotteryGetResponse {
    /**
     * 
     * @type {LotteryLottery}
     * @memberof LotterylotteryGetResponse
     */
    lottery?: LotteryLottery;
}

/**
 * Check if a given object implements the LotterylotteryGetResponse interface.
 */
export function instanceOfLotterylotteryGetResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotterylotteryGetResponseFromJSON(json: any): LotterylotteryGetResponse {
    return LotterylotteryGetResponseFromJSONTyped(json, false);
}

export function LotterylotteryGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotterylotteryGetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lottery': !exists(json, 'lottery') ? undefined : LotteryLotteryFromJSON(json['lottery']),
    };
}

export function LotterylotteryGetResponseToJSON(value?: LotterylotteryGetResponse | null): any {
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

