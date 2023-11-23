/* tslint:disable */
/* eslint-disable */
/**
 * user/auth.proto
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
import type { AuthConfig } from './AuthConfig';
import {
    AuthConfigFromJSON,
    AuthConfigFromJSONTyped,
    AuthConfigToJSON,
} from './AuthConfig';

/**
 * 
 * @export
 * @interface AuthConfigCreateResponse
 */
export interface AuthConfigCreateResponse {
    /**
     * 
     * @type {AuthConfig}
     * @memberof AuthConfigCreateResponse
     */
    config?: AuthConfig;
}

/**
 * Check if a given object implements the AuthConfigCreateResponse interface.
 */
export function instanceOfAuthConfigCreateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthConfigCreateResponseFromJSON(json: any): AuthConfigCreateResponse {
    return AuthConfigCreateResponseFromJSONTyped(json, false);
}

export function AuthConfigCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthConfigCreateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': !exists(json, 'config') ? undefined : AuthConfigFromJSON(json['config']),
    };
}

export function AuthConfigCreateResponseToJSON(value?: AuthConfigCreateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': AuthConfigToJSON(value.config),
    };
}

