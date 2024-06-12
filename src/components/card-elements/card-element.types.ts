import { BlockElementHeight, Spacing } from "../../utils/design-tokens";
import { IActionSet } from "../containers/action-set.types";
import { IImage } from "./image.types";
import { IMedia } from "./media.types";
import { IRichTextBlock } from "./rich-text-block.types";
import { ITextBlock } from "./text-block.types";

export interface ICardElement {
  fallback?: ICardElementFallback;
  height?: BlockElementHeight;
  separator?: boolean;
  spacing?: Spacing;
  id?: string;
  isVisible?: boolean; // default is true
  requires?: Record<string, string>;
}

export type ICardElementFallback =
  | IActionSet
  | IColumnSet
  | IContainer
  | IFactSet
  | IImage
  | IImageSet
  | IInputChoiceSet
  | IInputDate
  | IInputNumber
  | IInputText
  | IInputTime
  | IInputToggle
  | IMedia
  | IRichTextBlock
  | ITable
  | ITextBlock
  | "drop";
