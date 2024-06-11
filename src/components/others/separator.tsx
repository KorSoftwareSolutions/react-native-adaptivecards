import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useHostConfig } from "../../hooks/useHostConfig";

export interface IProps {
  hideLine?: boolean;
}

export const Separator = (props: IProps) => {
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();

  /* ******************** Variables ******************** */
  const styles: StyleProp<ViewStyle> = {
    height: hostConfig.separator?.lineThickness,
    marginVertical: hostConfig.separator?.spacing,
  };

  if (!props.hideLine) {
    styles.backgroundColor = hostConfig?.separator?.lineColor;
  }

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <View style={styles} />;
};
