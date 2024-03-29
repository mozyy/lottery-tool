/* tslint:disable */
/* eslint-disable */
/**
 * lottery/lottery.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  LotteryServiceUpdateRequest,
  LotterylotteryCreateRequest,
  LotterylotteryCreateResponse,
  LotterylotteryGetResponse,
  LotterylotteryListResponse,
  LotterylotteryUpdateResponse,
  RpcStatus,
} from '../models';
import {
    LotteryServiceUpdateRequestFromJSON,
    LotteryServiceUpdateRequestToJSON,
    LotterylotteryCreateRequestFromJSON,
    LotterylotteryCreateRequestToJSON,
    LotterylotteryCreateResponseFromJSON,
    LotterylotteryCreateResponseToJSON,
    LotterylotteryGetResponseFromJSON,
    LotterylotteryGetResponseToJSON,
    LotterylotteryListResponseFromJSON,
    LotterylotteryListResponseToJSON,
    LotterylotteryUpdateResponseFromJSON,
    LotterylotteryUpdateResponseToJSON,
    RpcStatusFromJSON,
    RpcStatusToJSON,
} from '../models';

export interface LotteryServiceCreateRequest {
    body: LotterylotteryCreateRequest;
}

export interface LotteryServiceDeleteRequest {
    id: number;
}

export interface LotteryServiceGetRequest {
    id: number;
}

export interface LotteryServiceListRequest {
    lotteryIds?: Array<number>;
    lotteryUserId?: string;
    paginatePage?: number;
    paginatePerPage?: number;
}

export interface LotteryServiceUpdateOperationRequest {
    id: number;
    body: LotteryServiceUpdateRequest;
}

/**
 * 
 */
export class LotteryServiceApi extends runtime.BaseAPI {

    /**
     */
    async lotteryServiceCreateRaw(requestParameters: LotteryServiceCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LotterylotteryCreateResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling lotteryServiceCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/lottery.lottery.LotteryService/lotterys`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LotterylotteryCreateRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LotterylotteryCreateResponseFromJSON(jsonValue));
    }

    /**
     */
    async lotteryServiceCreate(requestParameters: LotteryServiceCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LotterylotteryCreateResponse> {
        const response = await this.lotteryServiceCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async lotteryServiceDeleteRaw(requestParameters: LotteryServiceDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling lotteryServiceDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/lottery.lottery.LotteryService/lotterys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async lotteryServiceDelete(requestParameters: LotteryServiceDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.lotteryServiceDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async lotteryServiceGetRaw(requestParameters: LotteryServiceGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LotterylotteryGetResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling lotteryServiceGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/lottery.lottery.LotteryService/lotterys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LotterylotteryGetResponseFromJSON(jsonValue));
    }

    /**
     */
    async lotteryServiceGet(requestParameters: LotteryServiceGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LotterylotteryGetResponse> {
        const response = await this.lotteryServiceGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async lotteryServiceListRaw(requestParameters: LotteryServiceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LotterylotteryListResponse>> {
        const queryParameters: any = {};

        if (requestParameters.lotteryIds) {
            queryParameters['lottery.ids'] = requestParameters.lotteryIds;
        }

        if (requestParameters.lotteryUserId !== undefined) {
            queryParameters['lottery.userId'] = requestParameters.lotteryUserId;
        }

        if (requestParameters.paginatePage !== undefined) {
            queryParameters['paginate.page'] = requestParameters.paginatePage;
        }

        if (requestParameters.paginatePerPage !== undefined) {
            queryParameters['paginate.perPage'] = requestParameters.paginatePerPage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/lottery.lottery.LotteryService/lotterys`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LotterylotteryListResponseFromJSON(jsonValue));
    }

    /**
     */
    async lotteryServiceList(requestParameters: LotteryServiceListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LotterylotteryListResponse> {
        const response = await this.lotteryServiceListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async lotteryServiceUpdateRaw(requestParameters: LotteryServiceUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LotterylotteryUpdateResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling lotteryServiceUpdate.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling lotteryServiceUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/lottery.lottery.LotteryService/lotterys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: LotteryServiceUpdateRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LotterylotteryUpdateResponseFromJSON(jsonValue));
    }

    /**
     */
    async lotteryServiceUpdate(requestParameters: LotteryServiceUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LotterylotteryUpdateResponse> {
        const response = await this.lotteryServiceUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
