import React from "react";
import { Text, TouchableOpacity, LayoutChangeEvent, StyleProp, TextStyle, ViewStyle } from "react-native";
import { useHostConfig } from "../../../hooks/useHostConfig";
import { Spacing } from "../../../utils/design-tokens";

interface IProps {
  onPress: () => void;
  onLayout?: (e: LayoutChangeEvent) => void;
}

export const ActionsDropdownButton = ({ onPress, onLayout }: IProps) => {
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();
  /* ******************** Variables ******************** */
  const composedContainerStyles: StyleProp<ViewStyle> = {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
    paddingHorizontal: hostConfig.spacing?.[hostConfig.actions?.spacing ?? Spacing.Default],
    paddingVertical: hostConfig.spacing?.[hostConfig.actions?.spacing ?? Spacing.Default],
  };

  const composedTextStyles: StyleProp<TextStyle> = {
    color: "blue",
    fontSize: hostConfig.fontSizes?.default,
    fontFamily: hostConfig.fontFamily?.default?.regular,
  };
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <TouchableOpacity onPress={onPress} onLayout={onLayout} style={composedContainerStyles}>
      <Text style={composedTextStyles}>....</Text>
    </TouchableOpacity>
  );
};
