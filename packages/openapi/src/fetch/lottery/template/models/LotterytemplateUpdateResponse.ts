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
import type { TemplateTemplateWithLottery } from './TemplateTemplateWithLottery';
import {
    TemplateTemplateWithLotteryFromJSON,
    TemplateTemplateWithLotteryFromJSONTyped,
    TemplateTemplateWithLotteryToJSON,
} from './TemplateTemplateWithLottery';

/**
 * 
 * @export
 * @interface LotterytemplateUpdateResponse
 */
export interface LotterytemplateUpdateResponse {
    /**
     * 
     * @type {TemplateTemplateWithLottery}
     * @memberof LotterytemplateUpdateResponse
     */
    template?: TemplateTemplateWithLottery;
}

/**
 * Check if a given object implements the LotterytemplateUpdateResponse interface.
 */
export function instanceOfLotterytemplateUpdateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LotterytemplateUpdateResponseFromJSON(json: any): LotterytemplateUpdateResponse {
    return LotterytemplateUpdateResponseFromJSONTyped(json, false);
}

export function LotterytemplateUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LotterytemplateUpdateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'template': !exists(json, 'template') ? undefined : TemplateTemplateWithLotteryFromJSON(json['template']),
    };
}

export function LotterytemplateUpdateResponseToJSON(value?: LotterytemplateUpdateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'template': TemplateTemplateWithLotteryToJSON(value.template),
    };
}

