import { useHostConfig } from "../../../hooks/useHostConfig";
import { Spacing } from "../../../utils/design-tokens";
import { ViewStyle, TextStyle } from "react-native";
import { useActionWrapper } from "./action-wrapper";
import { ActionStyle } from "./action-wrapper.types";

export const useActionButtonContainerStyles = (): ViewStyle => {
  const { hostConfig } = useHostConfig();
  const { isEnabled, style } = useActionWrapper();

  let flexDirection: ViewStyle["flexDirection"] = "row";
  if (hostConfig.actions?.iconPlacement === "aboveTitle") {
    flexDirection = "column";
  }

  const paddingHorizontal: ViewStyle["paddingHorizontal"] = hostConfig.spacing?.[hostConfig.actions?.spacing ?? Spacing.Default] ?? 0;
  const paddingVertical: ViewStyle["paddingVertical"] = hostConfig.spacing?.[hostConfig.actions?.spacing ?? Spacing.Default] ?? 0;

  let borderColor: ViewStyle["borderColor"] = "blue";
  if (!isEnabled) {
    borderColor = "lightgray";
  } else if (style === ActionStyle.Positive) {
    borderColor = "blue";
  } else if (style === ActionStyle.Destructive) {
    borderColor = "red";
  }

  let backgroundColor: ViewStyle["backgroundColor"] = "transparent";
  if ((style === ActionStyle.Positive || style === ActionStyle.Destructive) && !isEnabled) {
    backgroundColor = "lightgray";
  } else if (style === ActionStyle.Positive) {
    backgroundColor = "blue";
  } else if (style === ActionStyle.Destructive) {
    backgroundColor = "red";
  }

  return {
    flexDirection,
    paddingHorizontal,
    paddingVertical,
    borderColor,
    backgroundColor,
  };
};

export const useActionButtonTextStyles = (): TextStyle => {
  const { hostConfig } = useHostConfig();
  const { isEnabled, style } = useActionWrapper();
  let color: TextStyle["color"] = "blue";
  if (!isEnabled) {
    color = "gray";
  } else if (style === ActionStyle.Positive || style === ActionStyle.Destructive) {
    color = "white";
  }

  return {
    color,
    fontSize: hostConfig.fontSizes?.default,
    fontFamily: hostConfig.fontFamily?.default?.bold,
  };
};
