import { FontType, FontWeight, HorizontalAlignment } from "../../utils/design-tokens";
import { IHostConfig } from "../../utils/host-config-models";
import { ITextRun } from "./rich-text-block.types";
import { TextStyle } from "react-native";

export class TextRunStyles {
  constructor(public props: Required<ITextRun>, public hostConfig: IHostConfig) {}

  getColor(): TextStyle["color"] {
    return this.props.isSubtle
      ? this.hostConfig.containerStyles?.default?.foregroundColors?.[this.props.color].subtle
      : this.hostConfig.containerStyles?.default?.foregroundColors?.[this.props.color].default;
  }

  getFontFamily(italic?: boolean): TextStyle["fontFamily"] {
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
  }

  getBackgroundColor(): TextStyle["backgroundColor"] {
    return this.props.highlight ? "lightgray" : "transparent";
  }

  getTextAlign(parentHorizontalAlignment: HorizontalAlignment): TextStyle["textAlign"] {
    if (parentHorizontalAlignment === HorizontalAlignment.Center) {
      return "center";
    } else if (parentHorizontalAlignment === HorizontalAlignment.Right) {
      return "right";
    } else {
      return "left";
    }
  }

  getTextDecorationLine(): TextStyle["textDecorationLine"] {
    if (this.props.strikethrough && this.props.underline) {
      return "underline line-through";
    }
    if (this.props.strikethrough) {
      return "line-through";
    }
    if (this.props.underline) {
      return "underline";
    }
    return "none";
  }
}
