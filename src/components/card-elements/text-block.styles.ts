import { FontType, FontWeight } from "../../utils/design-tokens";
import { IHostConfig } from "../../utils/host-config-models";
import { TextStyle } from "react-native";
import { ITextBlock } from "./text-block.types";

export class TextBlockStyles {
  constructor(public props: Required<ITextBlock>, public hostConfig: IHostConfig) {}

  getFontFamily = (): TextStyle["fontFamily"] => {
    if (this.props.fontType === FontType.Monospace) {
      return this.hostConfig.fontFamily?.monospace?.regular;
    }
    return this.hostConfig.fontFamily?.default?.regular;
  };

  getFontWeight = (): TextStyle["fontWeight"] => {
    switch (this.props.weight) {
      case FontWeight.Lighter:
        return "light";
      case FontWeight.Bolder:
        return "bold";
      case FontWeight.Default:
      default:
        return "regular";
    }
  };

  getColor = (): TextStyle["color"] => {
    return this.props.isSubtle
      ? this.hostConfig.containerStyles?.default?.foregroundColors?.[this.props.color].subtle
      : this.hostConfig.containerStyles?.default?.foregroundColors?.[this.props.color].default;
  };
}
