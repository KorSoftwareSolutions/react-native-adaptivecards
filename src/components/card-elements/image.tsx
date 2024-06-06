import React from "react";
import { Image as RNImage } from "react-native";
import { IImage, ImageStyle } from "./image.types";
import { BlockElementHeight, HorizontalAlignment, ImageSize, Spacing } from "../../utils/design-tokens";

const DEFAULT_PROPS: Required<IImage> = {
  type: "Image",
  url: "https://placehold.co/400",
  altText: "",
  backgroundColor: "transparent",
  height: BlockElementHeight.Auto,
  horizontalAlignment: HorizontalAlignment.Left,
  selectAction: undefined,
  size: ImageSize.Auto,
  style: ImageStyle.Default,
  width: "100%",
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
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <RNImage source={{ uri: props.url }} alt={props.altText} />;
};
