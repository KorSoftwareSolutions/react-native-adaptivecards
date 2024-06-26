import { Colors, FontSize, FontType, FontWeight, HorizontalAlignment } from "../../utils/design-tokens";
import { ISelectAction } from "../cards/adaptive-card.types";
import { ICardElement } from "./card-element.types";

export interface IRichTextBlockProps {
  inlines?: IRichTextBlockInline[];
  horizontalAlignment?: HorizontalAlignment;
}

export interface IRichTextBlock extends ICardElement, IRichTextBlockProps {
  type: "RichTextBlock";
}

export type IRichTextBlockInline = ITextRun | string;

export interface ITextRun {
  type: "TextRun";
  text: string;
  color?: Colors;
  fontType?: FontType;
  highlight?: boolean;
  isSubtle?: boolean;
  italic?: boolean;
  selectAction?: ISelectAction;
  size?: FontSize;
  strikethrough?: boolean;
  underline?: boolean;
  weight?: FontWeight;
}
