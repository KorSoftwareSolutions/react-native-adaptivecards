import React from "react";
import { Text, TextStyle } from "react-native";
import { ITextBlock, TextBlockStyle } from "./text-block.types";
import { useHostConfig } from "../../hooks/useHostConfig";
import { markdownFormatter } from "../../utils/markdown-formatter";

const DEFAULT_PROPS: ITextBlock = {
  type: "TextBlock",
  style: TextBlockStyle.Default,
};

export const TextBlock = (providedProps: ITextBlock) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();

  /* ******************** Variables ******************** */
  const composedStyles: TextStyle = {};
  if (props.color) {
    // composedStyles.color =
  }
  if (props.size) {
    // composedStyles.fontSize = hostConfig.fontSizes[props.size];
  }
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <Text>{markdownFormatter(props.text)}</Text>;
};
