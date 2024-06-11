import { Colors, Spacing, ImageSize, FontWeight, FontSize } from "./design-tokens";
import { IForegroundColorsConfig, IHostConfig } from "./host-config-models";

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
  fontFamily: {
    default: {},
    monospace: {},
  },
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
    lineColor: "lightgrey",
    spacing: 5,
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
