import { BlockElementHeight, HorizontalAlignment, ImageSize } from "../../utils/design-tokens";
import { ISelectAction } from "../cards/adaptive-card.types";
import { ICardElement } from "./card-element.types";

export interface IImage extends Omit<ICardElement, "height"> {
  type: "Image";
  url: string;
  altText?: string;
  backgroundColor?: string;
  height?: number | string | BlockElementHeight;
  horizontalAlignment?: HorizontalAlignment;
  selectAction?: ISelectAction;
  size?: ImageSize;
  style?: ImageStyle;
  width?: number | string;
}

export enum ImageStyle {
  Default = "default",
  Person = "person",
}
