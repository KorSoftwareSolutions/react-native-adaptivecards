import { FontType, FontWeight } from "../../utils/design-tokens";
import { IHostConfig } from "../../utils/host-config-models";
import { TextStyle } from "react-native";

const getFontFamily = (fontType: FontType, hostConfig: IHostConfig) => {
  if (fontType === FontType.Monospace) {
    return hostConfig.fontFamily?.monospace?.regular;
  }
  return hostConfig.fontFamily?.default?.regular;
};

const getFontWeight = (weight: FontWeight): TextStyle["fontWeight"] => {
  switch (weight) {
    case FontWeight.Lighter:
      return "light";
    case FontWeight.Bolder:
      return "bold";
    case FontWeight.Default:
    default:
      return "regular";
  }
};

export const textBlockUtils = {
  getFontFamily,
  getFontWeight,
};
