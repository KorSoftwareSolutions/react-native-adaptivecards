import { Colors, FontSize, FontWeight, ImageSize, Spacing } from "./design-tokens";

const defaultForegroundColors: IForegroundColorsConfig = {
  [Colors.Default]: {
    default: "#000000",
    subtle: "#767676",
  },
  [Colors.Accent]: {
    default: "#0063B1",
    subtle: "#0063B1",
  },
  [Colors.Good]: {
    default: "#54a254",
    subtle: "#DD54a254",
  },
  [Colors.Warning]: {
    default: "#c3ab23",
    subtle: "#DDc3ab23",
  },
  [Colors.Attention]: {
    default: "#FF0000",
    subtle: "#DDFF0000",
  },
  [Colors.Dark]: {
    default: "#000000",
    subtle: "#66000000",
  },
  [Colors.Light]: {
    default: "#FFFFFF",
    subtle: "#33000000",
  },
};

export const defaultHostConfig: IHostConfig = {
  allowCustomStyle: true,
  supportsInteractivity: true,
  fontFamily: "Calibri",
  actions: {
    actionsOrientation: "horizontal",
    actionAlignment: "stretch",
    buttonSpacing: 10,
    maxActions: 5,
    spacing: Spacing.Default,
    showCard: {
      actionMode: "inline",
      style: "emphasis",
      inlineTopMargin: 16,
    },
    iconPlacement: "leftOfTitle",
    iconSize: 30,
  },
  adaptiveCard: {
    allowCustomStyle: false,
  },
  containerStyles: {
    // TODO: Add some defaults
    default: {
      backgroundColor: "#FFFFFF",
      foregroundColors: defaultForegroundColors,
    },
    emphasis: {
      backgroundColor: "#F0F0F0",
      foregroundColors: defaultForegroundColors,
    },
  },
  imageSizes: {
    small: 80,
    medium: 120,
    large: 180,
  },
  imageSet: {
    imageSize: ImageSize.Auto,
    maxImageHeight: 100,
  },
  factSet: {
    title: {
      weight: FontWeight.Bolder,
      size: FontSize.Default,
      color: Colors.Default,
      isSubtle: false,
      wrap: true,
      maxWidth: 150,
    },
    value: {
      weight: FontWeight.Default,
      size: FontSize.Default,
      color: Colors.Default,
      isSubtle: false,
      wrap: true,
      maxWidth: 0,
    },
    spacing: 10,
  },
  fontSizes: {
    small: 10,
    default: 12,
    medium: 14,
    large: 17,
    extraLarge: 20,
  },
  fontWeights: {
    lighter: 200,
    default: 400,
    bolder: 600,
  },
  spacing: {
    none: 0,
    small: 3,
    default: 8,
    medium: 20,
    large: 30,
    extraLarge: 40,
    padding: 20,
  },
  separator: {
    lineThickness: 1,
    lineColor: "#B2000000",
  },
  media: {
    allowInlinePlayback: true,
  },
  inputs: {
    label: {
      requiredInputs: {
        color: Colors.Default,
        isSubtle: false,
        size: FontSize.Default,
        suffix: "*",
        weight: FontWeight.Bolder,
      },
      optionalInputs: {
        color: Colors.Default,
        isSubtle: false,
        size: FontSize.Default,
        suffix: "",
        weight: FontWeight.Default,
      },
      spacing: Spacing.Default,
    },
    errorMessage: {
      spacing: Spacing.Default,
      size: FontSize.Default,
      weight: FontWeight.Default,
    },
  },
};

export class IHostConfig {
  allowCustomStyle?: boolean;
  supportsInteractivity?: boolean;
  imageBaseUrl?: string;
  fontFamily?: string;
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
