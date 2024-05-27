import { Colors, FontSize, FontType, FontWeight, HorizontalAlignment } from "../../utils/design-tokens";
import { ICardElement } from "./card-element.types";

export interface ITextBlock extends ICardElement {
  type: "TextBlock";
  text?: string; // Markdown (Commonmark subset) supported
  color?: Colors;
  fontType?: FontType;
  horizontalAlignment?: HorizontalAlignment;
  isSubtle?: boolean;
  maxLines?: number;
  size?: FontSize;
  weight?: FontWeight;
  wrap?: boolean;
  style?: TextBlockStyle;
}

export enum TextBlockStyle {
  Default = "default",
  Heading = "heading",
}
