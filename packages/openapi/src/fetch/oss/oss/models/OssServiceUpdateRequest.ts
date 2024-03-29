/* tslint:disable */
/* eslint-disable */
/**
 * oss/oss.proto
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
import type { OssNewOss } from './OssNewOss';
import {
    OssNewOssFromJSON,
    OssNewOssFromJSONTyped,
    OssNewOssToJSON,
} from './OssNewOss';

/**
 * 
 * @export
 * @interface OssServiceUpdateRequest
 */
export interface OssServiceUpdateRequest {
    /**
     * 
     * @type {OssNewOss}
     * @memberof OssServiceUpdateRequest
     */
    oss?: OssNewOss;
}

/**
 * Check if a given object implements the OssServiceUpdateRequest interface.
 */
export function instanceOfOssServiceUpdateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OssServiceUpdateRequestFromJSON(json: any): OssServiceUpdateRequest {
    return OssServiceUpdateRequestFromJSONTyped(json, false);
}

export function OssServiceUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OssServiceUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oss': !exists(json, 'oss') ? undefined : OssNewOssFromJSON(json['oss']),
    };
}

export function OssServiceUpdateRequestToJSON(value?: OssServiceUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oss': OssNewOssToJSON(value.oss),
    };
}

