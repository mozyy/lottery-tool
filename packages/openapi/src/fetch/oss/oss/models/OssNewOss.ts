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
import type { OssBucketName } from './OssBucketName';
import {
    OssBucketNameFromJSON,
    OssBucketNameFromJSONTyped,
    OssBucketNameToJSON,
} from './OssBucketName';

/**
 * 
 * @export
 * @interface OssNewOss
 */
export interface OssNewOss {
    /**
     * 
     * @type {OssBucketName}
     * @memberof OssNewOss
     */
    bucketName?: OssBucketName;
    /**
     * 
     * @type {string}
     * @memberof OssNewOss
     */
    objectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof OssNewOss
     */
    name?: string;
}

/**
 * Check if a given object implements the OssNewOss interface.
 */
export function instanceOfOssNewOss(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OssNewOssFromJSON(json: any): OssNewOss {
    return OssNewOssFromJSONTyped(json, false);
}

export function OssNewOssFromJSONTyped(json: any, ignoreDiscriminator: boolean): OssNewOss {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bucketName': !exists(json, 'bucketName') ? undefined : OssBucketNameFromJSON(json['bucketName']),
        'objectKey': !exists(json, 'objectKey') ? undefined : json['objectKey'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function OssNewOssToJSON(value?: OssNewOss | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bucketName': OssBucketNameToJSON(value.bucketName),
        'objectKey': value.objectKey,
        'name': value.name,
    };
}

