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
import type { LotteryfavoriteFavoriteWithLottery } from './LotteryfavoriteFavoriteWithLottery';
import {
    LotteryfavoriteFavoriteWithLotteryFromJSON,
    LotteryfavoriteFavoriteWithLotteryFromJSONTyped,
    LotteryfavoriteFavoriteWithLotteryToJSON,
} from './LotteryfavoriteFavoriteWithLottery';

/**
 * 
 * @export
 * @interface LotteryfavoriteUpdateResponse
 */
export interface LotteryfavoriteUpdateResponse {
    /**
     * 
     * @type {LotteryfavoriteFavoriteWithLottery}
     * @memberof LotteryfavoriteUpdateResponse
     */
    favorite?: LotteryfavoriteFavoriteWithLottery;
}

/**
 * Check if a given object implements the LotteryfavoriteUpdateResponse interface.
 */
export function instanceOfLotteryfavoriteUpdateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotteryfavoriteUpdateResponseFromJSON(json: any): LotteryfavoriteUpdateResponse {
    return LotteryfavoriteUpdateResponseFromJSONTyped(json, false);
}

export function LotteryfavoriteUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotteryfavoriteUpdateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'favorite': !exists(json, 'favorite') ? undefined : LotteryfavoriteFavoriteWithLotteryFromJSON(json['favorite']),
    };
}

export function LotteryfavoriteUpdateResponseToJSON(value?: LotteryfavoriteUpdateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'favorite': LotteryfavoriteFavoriteWithLotteryToJSON(value.favorite),
    };
}
