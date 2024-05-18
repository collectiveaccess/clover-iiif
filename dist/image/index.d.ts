// Generated by dts-bundle-generator v8.0.1

import { IIIFExternalWebResource, InternationalString } from '@iiif/presentation-3';
import { Options } from 'openseadragon';
import React from 'react';

export interface LabeledIIIFExternalWebResource extends IIIFExternalWebResource {
	label?: InternationalString;
}
export interface CloverImageProps {
	_cloverViewerHasPlaceholder?: boolean;
	body?: LabeledIIIFExternalWebResource;
	instanceId?: string;
	isTiledImage?: boolean;
	label?: InternationalString | string;
	src?: string;
	openSeadragonCallback?: (viewer: any) => void;
	openSeadragonConfig?: Options;
}
declare const CloverImage: React.FC<CloverImageProps>;

export {
	CloverImage as default,
};

export {};
