import { Colors, FontSize, FontWeight, ImageSize, Spacing } from "./design-tokens";

export class IHostConfig {
  allowCustomStyle?: boolean;
  supportsInteractivity?: boolean;
  imageBaseUrl?: string;
  fontFamily?: IFontFamilyConfig;
  actions?: IActionsConfig;
  adaptiveCard?: IHostConfig;
  containerStyles?: IContainerStylesConfig;
  imageSizes?: IImageSizesConfig;
  imageSet?: IImageSetConfig;
  factSet?: IFactSetConfig;
  fontSizes?: IFontSizesConfig;
  fontWeights?: IFontWeightsConfig;
  spacing?: ISpacingConfig;
  separator?: ISeparatorConfig;
  media?: IMediaConfig;

  inputs?: IInputsConfig; // Missing on the docs https://learn.microsoft.com/en-us/adaptive-cards/rendering-cards/host-config
  textBlock?: ITextBlockConfig; // Missing on the docs https://learn.microsoft.com/en-us/adaptive-cards/rendering-cards/host-config
}

export interface IActionsConfig {
  actionsOrientation?: "horizontal" | "vertical";
  actionAlignment?: "stretch" | "left" | "center" | "right";
  buttonSpacing?: number;
  maxActions?: number;
  spacing?: Spacing;
  showCard?: IShowCardConfig;
  iconPlacement?: "aboveTitle" | "leftOfTitle";
  iconSize?: number;
}

export interface IShowCardConfig {
  actionMode?: "inline" | "popup";
  style?: "emphasis" | "default";
  inlineTopMargin?: number;
}

export interface IContainerStylesConfig {
  default?: IContainerStyleConfig;
  emphasis?: IContainerStyleConfig;
}

export interface IContainerStyleConfig {
  backgroundColor?: string;
  foregroundColors?: IForegroundColorsConfig;
}

export interface IImageSizesConfig {
  small?: number;
  medium?: number;
  large?: number;
}

export interface IImageSetConfig {
  imageSize?: ImageSize;
  maxImageHeight?: number;
}

export interface IFactSetConfig {
  title?: ITextBlockConfig;
  value?: ITextBlockConfig;
  spacing?: number;
}

export interface ITextBlockConfig {
  size?: FontSize;
  weight?: FontWeight;
  color?: Colors;
  isSubtle?: boolean;
  wrap?: boolean;
  maxWidth?: number;
}

export type IFontSizesConfig = Record<FontSize, number>;
export type IFontWeightsConfig = Record<FontWeight, number>;
export type ISpacingConfig = Record<Spacing, number>;

export interface ISeparatorConfig {
  lineThickness?: number;
  lineColor?: string;
  spacing?: number; // Not on the docs https://learn.microsoft.com/en-us/adaptive-cards/rendering-cards/host-config
}

export interface IMediaConfig {
  defaultPoster?: string;
  playButton?: string;
  allowInlinePlayback?: boolean;
}

export type IForegroundColorsConfig = Record<
  Colors,
  {
    default?: string;
    subtle?: string;
  }
>;

export interface IInputsConfig {
  label?: ILabelConfig;
  errorMessage?: IErrorMessagesConfig;
}

export interface ILabelConfig {
  requiredInputs?: IInputLabelConfig;
  optionalInputs?: IInputLabelConfig;
  spacing?: Spacing;
}

export interface IInputLabelConfig {
  color?: Colors;
  isSubtle?: boolean;
  size?: FontSize;
  suffix?: string;
  weight?: FontWeight;
}

export interface IErrorMessagesConfig {
  spacing?: Spacing;
  size?: FontSize;
  weight?: FontWeight;
}

export interface IFontFamilyConfig {
  default?: {
    light?: string;
    regular?: string;
    bold?: string;
    italicLight?: string;
    italic?: string;
    italicBold?: string;
  };
  monospace?: {
    light?: string;
    regular?: string;
    bold?: string;
    italicLight?: string;
    italic?: string;
    italicBold?: string;
  };
}
