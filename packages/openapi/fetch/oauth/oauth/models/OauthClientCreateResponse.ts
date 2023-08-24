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
import type { OauthClient } from './OauthClient';
import {
    OauthClientFromJSON,
    OauthClientFromJSONTyped,
    OauthClientToJSON,
} from './OauthClient';

/**
 * 
 * @export
 * @interface OauthClientCreateResponse
 */
export interface OauthClientCreateResponse {
    /**
     * 
     * @type {OauthClient}
     * @memberof OauthClientCreateResponse
     */
    client?: OauthClient;
}

/**
 * Check if a given object implements the OauthClientCreateResponse interface.
 */
export function instanceOfOauthClientCreateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OauthClientCreateResponseFromJSON(json: any): OauthClientCreateResponse {
    return OauthClientCreateResponseFromJSONTyped(json, false);
}

export function OauthClientCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OauthClientCreateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'client': !exists(json, 'client') ? undefined : OauthClientFromJSON(json['client']),
    };
}

export function OauthClientCreateResponseToJSON(value?: OauthClientCreateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'client': OauthClientToJSON(value.client),
    };
}

