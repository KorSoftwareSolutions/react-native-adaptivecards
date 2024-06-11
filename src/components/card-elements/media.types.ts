import { ICardElement } from "./card-element.types";

export interface IMediaProps {
  sources: IMediaSource[];
  poster?: string;
  altText?: string;
  captionSources?: ICaptionSource[];
}

export interface IMedia extends ICardElement, IMediaProps {
  type: "Media";
}

export interface IMediaSource {
  mimeType: string;
  url: string;
}

export interface ICaptionSource {
  mimeType: string;
  label: string;
  url: string;
}
