import React from "react";
import { Text, TextStyle } from "react-native";
import { ITextBlock, TextBlockStyle } from "./text-block.types";
import { useHostConfig } from "../../hooks/useHostConfig";
import { markdownFormatter } from "../../utils/markdown-formatter";
import { BlockElementHeight, Colors, FontSize, FontType, FontWeight, HorizontalAlignment, Spacing } from "../../utils/design-tokens";

const DEFAULT_PROPS: Required<ITextBlock> = {
  type: "TextBlock",
  style: TextBlockStyle.Default,
  color: Colors.Default,
  size: FontSize.Default,
  text: "",
  fontType: FontType.Default,
  horizontalAlignment: HorizontalAlignment.Left,
  isSubtle: false,
  maxLines: 0,
  weight: FontWeight.Default,
  wrap: false,
  fallback: undefined,
  height: BlockElementHeight.Auto,
  separator: false,
  spacing: Spacing.Default,
  id: "",
  isVisible: false,
  requires: {},
};

export const TextBlock = (providedProps: ITextBlock) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();

  /* ******************** Variables ******************** */
  const composedStyles: TextStyle = {
    fontSize: hostConfig?.fontSizes?.[props.size],
    color: hostConfig?.containerStyles?.default?.foregroundColors?.[props.color].default,
  };

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <Text style={composedStyles}>{markdownFormatter(props.text)}</Text>;
};
