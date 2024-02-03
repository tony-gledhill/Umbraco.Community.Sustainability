/* tslint:disable */
/* eslint-disable */
/**
 * Sustainability API
 * Umbraco.Community.Sustainability
 *
 * The version of the OpenAPI document: Latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SustainabilityResponseResourceGroupsInner } from './SustainabilityResponseResourceGroupsInner';
import {
    SustainabilityResponseResourceGroupsInnerFromJSON,
    SustainabilityResponseResourceGroupsInnerFromJSONTyped,
    SustainabilityResponseResourceGroupsInnerToJSON,
} from './SustainabilityResponseResourceGroupsInner';

/**
 * 
 * @export
 * @interface SustainabilityResponse
 */
export interface SustainabilityResponse {
    /**
     * 
     * @type {Date}
     * @memberof SustainabilityResponse
     */
    lastRunDate: Date;
    /**
     * 
     * @type {number}
     * @memberof SustainabilityResponse
     */
    totalSize: number;
    /**
     * 
     * @type {number}
     * @memberof SustainabilityResponse
     */
    totalEmissions: number;
    /**
     * 
     * @type {string}
     * @memberof SustainabilityResponse
     */
    carbonRating?: string | null;
    /**
     * 
     * @type {Array<SustainabilityResponseResourceGroupsInner>}
     * @memberof SustainabilityResponse
     */
    resourceGroups?: Array<SustainabilityResponseResourceGroupsInner> | null;
}

/**
 * Check if a given object implements the SustainabilityResponse interface.
 */
export function instanceOfSustainabilityResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lastRunDate" in value;
    isInstance = isInstance && "totalSize" in value;
    isInstance = isInstance && "totalEmissions" in value;

    return isInstance;
}

export function SustainabilityResponseFromJSON(json: any): SustainabilityResponse {
    return SustainabilityResponseFromJSONTyped(json, false);
}

export function SustainabilityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SustainabilityResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastRunDate': (new Date(json['lastRunDate'])),
        'totalSize': json['totalSize'],
        'totalEmissions': json['totalEmissions'],
        'carbonRating': !exists(json, 'carbonRating') ? undefined : json['carbonRating'],
        'resourceGroups': !exists(json, 'resourceGroups') ? undefined : (json['resourceGroups'] === null ? null : (json['resourceGroups'] as Array<any>).map(SustainabilityResponseResourceGroupsInnerFromJSON)),
    };
}

export function SustainabilityResponseToJSON(value?: SustainabilityResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastRunDate': (value.lastRunDate.toISOString()),
        'totalSize': value.totalSize,
        'totalEmissions': value.totalEmissions,
        'carbonRating': value.carbonRating,
        'resourceGroups': value.resourceGroups === undefined ? undefined : (value.resourceGroups === null ? null : (value.resourceGroups as Array<any>).map(SustainabilityResponseResourceGroupsInnerToJSON)),
    };
}
