import { FontType, FontWeight } from "../../utils/design-tokens";
import { IHostConfig } from "../../utils/host-config-models";
import { TextStyle } from "react-native";
import { ITextBlock } from "./text-block.types";

export class TextBlockStyles {
  constructor(public props: Required<ITextBlock>, public hostConfig: IHostConfig) {}

  getFontFamily = (italic?: boolean): TextStyle["fontFamily"] => {
    if (this.props.fontType === FontType.Monospace) {
      if (this.props.weight === FontWeight.Lighter) {
        if (italic) return this.hostConfig.fontFamily?.monospace?.italicLight;
        return this.hostConfig.fontFamily?.monospace?.light;
      }
      if (this.props.weight === FontWeight.Bolder) {
        if (italic) return this.hostConfig.fontFamily?.monospace?.italicBold;
        return this.hostConfig.fontFamily?.monospace?.bold;
      }
      if (italic) return this.hostConfig.fontFamily?.monospace?.italic;
      return this.hostConfig.fontFamily?.monospace?.regular;
    }
    if (this.props.weight === FontWeight.Lighter) {
      if (italic) return this.hostConfig.fontFamily?.default?.italicLight;
      return this.hostConfig.fontFamily?.default?.light;
    }
    if (this.props.weight === FontWeight.Bolder) {
      if (italic) return this.hostConfig.fontFamily?.default?.italicBold;
      return this.hostConfig.fontFamily?.default?.bold;
    }
    if (italic) return this.hostConfig.fontFamily?.default?.italic;
    return this.hostConfig.fontFamily?.default?.regular;
  };

  getColor = (): TextStyle["color"] => {
    return this.props.isSubtle
      ? this.hostConfig.containerStyles?.default?.foregroundColors?.[this.props.color].subtle
      : this.hostConfig.containerStyles?.default?.foregroundColors?.[this.props.color].default;
  };
}
