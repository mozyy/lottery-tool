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
 * @interface WxuserUpdateResponse
 */
export interface WxuserUpdateResponse {
    /**
     * 
     * @type {WxuserUser}
     * @memberof WxuserUpdateResponse
     */
    wxUser?: WxuserUser;
}

/**
 * Check if a given object implements the WxuserUpdateResponse interface.
 */
export function instanceOfWxuserUpdateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WxuserUpdateResponseFromJSON(json: any): WxuserUpdateResponse {
    return WxuserUpdateResponseFromJSONTyped(json, false);
}

export function WxuserUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WxuserUpdateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'wxUser': !exists(json, 'wxUser') ? undefined : WxuserUserFromJSON(json['wxUser']),
    };
}

export function WxuserUpdateResponseToJSON(value?: WxuserUpdateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'wxUser': WxuserUserToJSON(value.wxUser),
    };
}
