import { IHostConfig } from "../../../utils/host-config-models";
import { ViewStyle, LayoutRectangle } from "react-native";

export class ActionsDropdownStyles {
  constructor(public hostConfig: IHostConfig) {}

  getTop(buttonPageLayout?: LayoutRectangle, dropdownLayout?: LayoutRectangle): ViewStyle["top"] {
    const buttonPageY = buttonPageLayout?.y || 1;
    const buttonHeight = buttonPageLayout?.height || 1;
    const dropdownHeight = dropdownLayout?.height || 1;
    return buttonPageY + buttonHeight + dropdownHeight;
  }

  getRight(buttonPageLayout?: LayoutRectangle, dropdownLayout?: LayoutRectangle): ViewStyle["right"] {
    const buttonPageX = buttonPageLayout?.x || 1;
    const buttonWidth = buttonPageLayout?.width || 1;
    return buttonPageX - buttonWidth;
  }
}
