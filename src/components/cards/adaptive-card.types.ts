import { HorizontalAlignment, ImageFillMode, VerticalAlignment } from "../../utils/design-tokens";
import { IActionExecute } from "../actions/action-execute.types";
import { IActionOpenUrl } from "../actions/action-openurl.types";
import { IActionSubmit } from "../actions/action-submit.types";
import { IActionToggleVisibility } from "../actions/action-togglevisibility.types";
import { IAction } from "../actions/action.types";
import { IImage } from "../card-elements/image.types";
import { IMedia } from "../card-elements/media.types";
import { IRichTextBlock } from "../card-elements/rich-text-block.types";
import { ITextBlock } from "../card-elements/text-block.types";
import { IActionSet } from "../containers/action-set.types";

export interface IAdaptiveCard {
  type: "AdaptiveCard";
  version: string;
  refresh?: IRefresh;
  authentication?: IAuthentication;
  body?: ICardBody;
  actions?: IAction[];
  selectAction?: ISelectAction;
  fallbackText?: string;
  backgroundImage?: string | IBackgroundImage;
  metadata?: IMetadata;
  minHeight?: string;
  rtl?: boolean;
  speak?: string;
  lang?: string;
  verticalContentAlignment?: VerticalAlignment;
  $schema?: string;
}

export type ICardBody = (
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
)[];

export type ISelectAction = IActionExecute | IActionOpenUrl | IActionSubmit | IActionToggleVisibility;

export interface IRefresh {
  action?: any;
  expires?: string;
  userIds?: string[];
}

export interface IAuthentication {
  text?: string;
  connectionName?: string;
  tokenExchangeResource?: ITokenExchangeResource;
  buttons?: IAuthCardButton[];
}

export interface ITokenExchangeResource {
  id: string;
  uri: string;
  providerId: string;
}

export interface IAuthCardButton {
  type: string;
  value: string;
  title?: string;
  image?: string;
}

export interface IBackgroundImage {
  url: string;
  fillMode?: ImageFillMode;
  horizontalAlignment?: HorizontalAlignment;
  verticalAlignment?: VerticalAlignment;
}

export interface IMetadata {
  webUrl?: string;
}
