import React from "react";
import { Text } from "react-native";
import { ITextBlock, TextBlockStyle } from "./text-block.types";

const DEFAULT_PROPS: ITextBlock = {
  type: "TextBlock",
  style: TextBlockStyle.Default,
};

export const TextBlock = (providedProps: ITextBlock) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <Text>{props.text}</Text>;
};
