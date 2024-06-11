import React from "react";
import { IRichTextBlock, IRichTextBlockProps } from "./rich-text-block.types";
import { HorizontalAlignment } from "../../utils/design-tokens";
import { TextRun } from "./text-run";
import { View, StyleProp, ViewStyle } from "react-native";
import { RichTextBlockProvider } from "./rich-text-block.context";

const DEFAULT_PROPS: Required<IRichTextBlockProps> = {
  inlines: [],
  horizontalAlignment: HorizontalAlignment.Left,
};

export const RichTextBlock = (providedProps: IRichTextBlock) => {
  /* ******************** Hooks ******************** */
  const props = { ...DEFAULT_PROPS, ...providedProps };

  /* ******************** Variables ******************** */
  const composedStyles: StyleProp<ViewStyle> = {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
  };
  if (props.horizontalAlignment === HorizontalAlignment.Center) {
    composedStyles.justifyContent = "center";
  } else if (props.horizontalAlignment === HorizontalAlignment.Right) {
    composedStyles.justifyContent = "flex-end";
  } else {
    composedStyles.justifyContent = "flex-start";
  }

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <RichTextBlockProvider horizontalAlignment={props.horizontalAlignment}>
      <View style={composedStyles}>
        {props.inlines?.map((inline, index) => {
          if (typeof inline === "string") {
            return <TextRun type="TextRun" key={index} text={inline} />;
          } else {
            return <TextRun key={index} {...inline} />;
          }
        })}
      </View>
    </RichTextBlockProvider>
  );
};
