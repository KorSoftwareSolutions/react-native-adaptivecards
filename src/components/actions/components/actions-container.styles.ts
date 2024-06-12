import { IHostConfig } from "../../../utils/host-config-models";
import { ViewStyle } from "react-native";

export class ActionsContainerStyles {
  constructor(public hostConfig: IHostConfig) {}

  getFlexDirection(): ViewStyle["flexDirection"] {
    if (this.hostConfig.actions?.actionsOrientation === "vertical") {
      return "column";
    } else {
      return "row";
    }
  }

  getAlignItems(): ViewStyle["alignItems"] {
    if (this.hostConfig.actions?.actionsOrientation === "vertical") {
      return "stretch";
    } else {
      switch (this.hostConfig.actions?.actionAlignment) {
        case "left":
          return "flex-start";
        case "center":
          return "center";
        case "right":
          return "flex-end";
        case "stretch":
        default:
          return "stretch";
      }
    }
  }

  getJustifyContent(): ViewStyle["justifyContent"] {
    if (this.hostConfig.actions?.actionsOrientation === "vertical") {
      switch (this.hostConfig.actions?.actionAlignment) {
        case "left":
          return "flex-start";
        case "center":
          return "center";
        case "right":
          return "flex-end";
        case "stretch":
        default:
          return "space-between";
      }
    } else {
      return "flex-start";
    }
  }

  getGap(): ViewStyle["gap"] {
    return this.hostConfig.actions?.buttonSpacing;
  }
}
