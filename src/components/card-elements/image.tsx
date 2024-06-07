import React, { useEffect } from "react";
import { Image as RNImage, StyleProp, ImageStyle as RNImageStyle } from "react-native";
import { IImage, ImageStyle } from "./image.types";
import { BlockElementHeight, HorizontalAlignment, ImageSize, Spacing } from "../../utils/design-tokens";
import { ImageStyles } from "./image.styles";
import { useHostConfig } from "../../hooks/useHostConfig";
import { imageUtils } from "../../utils/image.utils";

const DEFAULT_PROPS: IImage = {
  type: "Image",
  url: "https://placehold.co/400",
  altText: "",
  backgroundColor: "transparent",
  height: undefined,
  horizontalAlignment: HorizontalAlignment.Left,
  selectAction: undefined,
  size: ImageSize.Auto,
  style: ImageStyle.Default,
  width: undefined,
  fallback: undefined,
  separator: false,
  spacing: Spacing.Default,
  id: "",
  isVisible: false,
  requires: {},
};

export const Image = (providedProps: IImage) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();
  const [actualImageSize, setActualImageSize] = React.useState<{ width: number; height: number } | null>(null);

  /* ******************** Variables ******************** */
  const shouldCalculateActualImageSize = props.size === ImageSize.Auto || props.height === BlockElementHeight.Auto;

  const styles = new ImageStyles(props, hostConfig);

  const baseStyles: StyleProp<RNImageStyle> = {
    backgroundColor: props.backgroundColor,
    height: styles.getHeight(actualImageSize?.height),
    width: actualImageSize?.width ?? props.width,
    resizeMode: styles.getResizeMode(),
  };

  console.log(baseStyles)

  const composedStyles: StyleProp<RNImageStyle> = [baseStyles];

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  useEffect(() => {
    if (!shouldCalculateActualImageSize) return;
    imageUtils.getSize(props.url).then((size) => {
      setActualImageSize(size);
    });
  }, []);

  /* ******************** JSX ******************** */
  return <RNImage source={{ uri: props.url }} alt={props.altText} style={composedStyles} />;
};
