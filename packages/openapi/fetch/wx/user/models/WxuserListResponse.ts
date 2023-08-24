/* tslint:disable */
/* eslint-disable */
/**
 * wx/user.proto
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
import type { WxuserUser } from './WxuserUser';
import {
    WxuserUserFromJSON,
    WxuserUserFromJSONTyped,
    WxuserUserToJSON,
} from './WxuserUser';

/**
 * 
 * @export
 * @interface WxuserListResponse
 */
export interface WxuserListResponse {
    /**
     * 
     * @type {Array<WxuserUser>}
     * @memberof WxuserListResponse
     */
    wxUsers?: Array<WxuserUser>;
}

/**
 * Check if a given object implements the WxuserListResponse interface.
 */
export function instanceOfWxuserListResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WxuserListResponseFromJSON(json: any): WxuserListResponse {
    return WxuserListResponseFromJSONTyped(json, false);
}

export function WxuserListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WxuserListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'wxUsers': !exists(json, 'wxUsers') ? undefined : ((json['wxUsers'] as Array<any>).map(WxuserUserFromJSON)),
    };
}

export function WxuserListResponseToJSON(value?: WxuserListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'wxUsers': value.wxUsers === undefined ? undefined : ((value.wxUsers as Array<any>).map(WxuserUserToJSON)),
    };
}

