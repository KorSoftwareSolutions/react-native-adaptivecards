import React, { useMemo } from "react";
import { ICardElement } from "./card-element.types";
import { Separator } from "../others/separator";
import { elementFactory } from "../../utils/element-factory";
import { View, StyleProp, ViewStyle } from "react-native";
import { useHostConfig } from "../../hooks/useHostConfig";
import { CardElementStyles } from "./card-element.styles";

const DEFAULT_PROPS: ICardElement = {
  isVisible: true,
};

export const CardElement = (providedProps: React.PropsWithChildren<ICardElement>) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();
  const styles = new CardElementStyles(props, hostConfig);

  /* ******************** Variables ******************** */
  const FallbackElement = useMemo(() => {
    if (!props.fallback || props.fallback === "drop") {
      return null;
    }
    const Element = elementFactory.getElement(props.fallback.type);
    return Element;
  }, [props.fallback]);

  const isInvalid = false;

  const spacerStyles: StyleProp<ViewStyle> = {
    height: styles.getSpacing(props.spacing),
  };

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  if (!props.isVisible) {
    return null;
  }

  return (
    <>
      {props.separator && <Separator />}
      <View style={spacerStyles} />
      {props.children}
    </>
  );
};
