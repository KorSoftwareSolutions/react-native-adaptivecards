import { HorizontalAlignment, ImageFillMode, VerticalAlignment } from "../../utils/design-tokens";
import { ITextBlock } from "../card-elements/text-block.types";

export interface IAdaptiveCard {
  type: "AdaptiveCard";
  version: string;
  refresh?: IRefresh;
  authentication?: IAuthentication;
  body?: ICardBody;
  actions?: ICardActions;
  selectAction?: ICardSelectAction;
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

export type ICardActions = (IActionExecute | IActionOpenUrl | IActionShowCard | IActionSubmit | IActionToggleVisibility)[];

export type ICardSelectAction = IActionExecute | IActionOpenUrl | IActionSubmit | IActionToggleVisibility;

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

export interface IActionExecute {
  type: "Action.Execute";
  verb?: string;
  data?: string | object;
  associatedInputs?: IAssociatedInputs;
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
