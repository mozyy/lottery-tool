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
 * @interface LotteryfavoriteGetResponse
 */
export interface LotteryfavoriteGetResponse {
    /**
     * 
     * @type {LotteryfavoriteFavoriteWithLottery}
     * @memberof LotteryfavoriteGetResponse
     */
    favorite?: LotteryfavoriteFavoriteWithLottery;
}

/**
 * Check if a given object implements the LotteryfavoriteGetResponse interface.
 */
export function instanceOfLotteryfavoriteGetResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotteryfavoriteGetResponseFromJSON(json: any): LotteryfavoriteGetResponse {
    return LotteryfavoriteGetResponseFromJSONTyped(json, false);
}

export function LotteryfavoriteGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotteryfavoriteGetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'favorite': !exists(json, 'favorite') ? undefined : LotteryfavoriteFavoriteWithLotteryFromJSON(json['favorite']),
    };
}

export function LotteryfavoriteGetResponseToJSON(value?: LotteryfavoriteGetResponse | null): any {
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
