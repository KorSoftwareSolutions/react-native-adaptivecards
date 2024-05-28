import React, { useMemo } from "react";
import { IAdaptiveCard } from "./adaptive-card.types";
import { ImageBackground, StyleSheet, ImageBackgroundProps, ViewStyle } from "react-native";
import { useHostConfig } from "../../hooks/useHostConfig";
import { stylesUtils } from "../../utils/styles-utils";
import { VerticalAlignment } from "../../utils/design-tokens";

const verticalContentAlignmentMap: Record<VerticalAlignment, ViewStyle["justifyContent"]> = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end",
};

export const AdaptiveCardContainer = (props: React.PropsWithChildren<IAdaptiveCard>) => {
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();

  /* ******************** Variables ******************** */
  const sourceProp: ImageBackgroundProps["source"] = useMemo(() => {
    if (!props.backgroundImage) return undefined;
    if (typeof props.backgroundImage === "string") {
      return { uri: props.backgroundImage };
    }
    return {
      uri: props.backgroundImage.url,
    };
  }, [props.backgroundImage]);

  let resizeModeProp: ImageBackgroundProps["resizeMode"] = "cover";
  if (typeof props.backgroundImage !== "string" && props.backgroundImage?.fillMode !== "cover") {
    resizeModeProp = "repeat";
  }
  const computedPropsStyle: ImageBackgroundProps["style"] = {};
  if (props.minHeight) {
    computedPropsStyle.minHeight = stylesUtils.parsePixels(props.minHeight);
  }
  if (props.verticalContentAlignment) {
    computedPropsStyle.justifyContent = verticalContentAlignmentMap[props.verticalContentAlignment];
  }
  const computedStyles = [styles.container, computedPropsStyle];

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */

  return (
    <ImageBackground
      source={sourceProp}
      resizeMode={resizeModeProp}
      style={computedStyles}
      accessible={!!props.speak}
      accessibilityLabel={props.speak}
    >
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
});
