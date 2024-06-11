import React from "react";
import { Text, StyleProp, TextStyle, Alert } from "react-native";
import { ITextRunProps } from "./text-run.types";
import { Colors, FontSize, FontType, FontWeight } from "../../utils/design-tokens";
import { ITextRun } from "./rich-text-block.types";
import { useHostConfig } from "../../hooks/useHostConfig";
import { TextRunStyles } from "./text-run.styles";
import { useRichTextBlockContext } from "./rich-text-block.context";
import { textRunUtils } from "./text-run.utils";

const DEFAULT_PROPS: Required<ITextRunProps> = {
  text: "",
  color: Colors.Default,
  fontType: FontType.Default,
  highlight: false,
  isSubtle: false,
  italic: false,
  selectAction: undefined,
  size: FontSize.Default,
  strikethrough: false,
  underline: false,
  weight: FontWeight.Default,
};

export const TextRun = (providedProps: ITextRun) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();
  const { horizontalAlignment } = useRichTextBlockContext();

  /* ******************** Variables ******************** */
  const styles = new TextRunStyles(props, hostConfig);

  const baseStyles: TextStyle = {
    fontSize: hostConfig?.fontSizes?.[props.size],
    color: styles.getColor(),
    fontFamily: styles.getFontFamily(props.italic),
    backgroundColor: styles.getBackgroundColor(),
    textAlign: styles.getTextAlign(horizontalAlignment),
    textDecorationLine: styles.getTextDecorationLine(),
  };

  const actionStyles: TextStyle = {
    color: "blue",
  };

  const composedStyles: StyleProp<TextStyle> = [baseStyles];
  if (props.selectAction) {
    composedStyles.push(actionStyles);
  }

  /* ******************** Functions ******************** */
  const onPress = () => {
    if (!props.selectAction) {
      return;
    }

    Alert.alert("Action", `You clicked on ${props.text} with action ${JSON.stringify(props.selectAction)}`);
  };
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <Text onPress={onPress} style={composedStyles}>
      {textRunUtils.formatDateTimes(providedProps.text)}
    </Text>
  );
};
