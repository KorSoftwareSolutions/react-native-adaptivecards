import { ICardElement } from "./card-element.types";

export interface IMedia extends ICardElement {
  type: "Media";
  sources: IMediaSource[];
  poster?: string;
  altText?: string;
  captionSources?: ICaptionSource[];
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
