import React from "react";
import { useHostConfig } from "../../../hooks/useHostConfig";
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle, LayoutChangeEvent, Image, ImageStyle } from "react-native";
import { useActionButtonContainerStyles, useActionButtonTextStyles } from "./action-button.styles";
import { useActionWrapper } from "./action-wrapper";

interface IProps {
  onPress: () => void;
}

export const ActionButton = (props: IProps) => {
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();
  const { iconUrl, isEnabled, title, id } = useActionWrapper();
  const containerStyle = useActionButtonContainerStyles();
  const textStyles = useActionButtonTextStyles();

  /* ******************** Variables ******************** */
  const composedContainerStyles: StyleProp<ViewStyle> = {
    alignItems: "center",
    borderWidth: 1,
    ...containerStyle,
  };

  const composedTextStyles: StyleProp<TextStyle> = {
    ...textStyles,
  };

  const composedIconStyles: StyleProp<ImageStyle> = {
    width: hostConfig.actions?.iconSize,
    height: hostConfig.actions?.iconSize,
  };

  /* ******************** Functions ******************** */

  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <TouchableOpacity onPress={props.onPress} disabled={!isEnabled} style={composedContainerStyles} key={id}>
      {!!iconUrl && <Image source={{ uri: iconUrl }} style={composedIconStyles} />}
      {!!title && <Text style={composedTextStyles}>{title}</Text>}
    </TouchableOpacity>
  );
};
