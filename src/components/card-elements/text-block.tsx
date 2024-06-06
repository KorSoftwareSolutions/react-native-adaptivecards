import React from "react";
import { Text, TextStyle } from "react-native";
import { ITextBlock, TextBlockStyle } from "./text-block.types";
import { useHostConfig } from "../../hooks/useHostConfig";
import { BlockElementHeight, Colors, FontSize, FontType, FontWeight, HorizontalAlignment, Spacing } from "../../utils/design-tokens";
import { useMarkdownFormatter } from "../../hooks/useMarkdownFormatter";
import { TextBlockStyles } from "./text-block.styles";

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
  const { markdownFormatter } = useMarkdownFormatter(props);

  /* ******************** Variables ******************** */
  const styles = new TextBlockStyles(props, hostConfig);
  const composedStyles: TextStyle = {
    fontSize: hostConfig?.fontSizes?.[props.size],
    color: styles.getColor(),
    textAlign: props.horizontalAlignment,
  };

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <Text numberOfLines={styles.getNumberOfLines()} style={composedStyles}>
      {markdownFormatter(props.text)}
    </Text>
  );
};
