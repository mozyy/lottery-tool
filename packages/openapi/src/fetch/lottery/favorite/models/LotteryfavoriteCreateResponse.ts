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
 * @interface LotteryfavoriteCreateResponse
 */
export interface LotteryfavoriteCreateResponse {
    /**
     * 
     * @type {LotteryfavoriteFavoriteWithLottery}
     * @memberof LotteryfavoriteCreateResponse
     */
    favorite?: LotteryfavoriteFavoriteWithLottery;
}

/**
 * Check if a given object implements the LotteryfavoriteCreateResponse interface.
 */
export function instanceOfLotteryfavoriteCreateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotteryfavoriteCreateResponseFromJSON(json: any): LotteryfavoriteCreateResponse {
    return LotteryfavoriteCreateResponseFromJSONTyped(json, false);
}

export function LotteryfavoriteCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotteryfavoriteCreateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'favorite': !exists(json, 'favorite') ? undefined : LotteryfavoriteFavoriteWithLotteryFromJSON(json['favorite']),
    };
}

export function LotteryfavoriteCreateResponseToJSON(value?: LotteryfavoriteCreateResponse | null): any {
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

