import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useHostConfig } from "../../hooks/useHostConfig";

export const Separator = () => {
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();

  /* ******************** Variables ******************** */
  const styles: StyleProp<ViewStyle> = {
    height: hostConfig.separator?.lineThickness,
    backgroundColor: hostConfig?.separator?.lineColor,
    marginTop: hostConfig?.spacing?.default,
  };

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <View style={styles} />;
};
