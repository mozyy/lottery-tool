/* tslint:disable */
/* eslint-disable */
/**
 * oauth/oauth.proto
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
import type { OauthConfig } from './OauthConfig';
import {
    OauthConfigFromJSON,
    OauthConfigFromJSONTyped,
    OauthConfigToJSON,
} from './OauthConfig';

/**
 * 
 * @export
 * @interface OauthConfigCreateResponse
 */
export interface OauthConfigCreateResponse {
    /**
     * 
     * @type {OauthConfig}
     * @memberof OauthConfigCreateResponse
     */
    config?: OauthConfig;
}

/**
 * Check if a given object implements the OauthConfigCreateResponse interface.
 */
export function instanceOfOauthConfigCreateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OauthConfigCreateResponseFromJSON(json: any): OauthConfigCreateResponse {
    return OauthConfigCreateResponseFromJSONTyped(json, false);
}

export function OauthConfigCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OauthConfigCreateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': !exists(json, 'config') ? undefined : OauthConfigFromJSON(json['config']),
    };
}

export function OauthConfigCreateResponseToJSON(value?: OauthConfigCreateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': OauthConfigToJSON(value.config),
    };
}
