import React from "react";
import { Image as RNImage } from "react-native";
import { IImage } from "./image.types";

const DEFAULT_PROPS: IImage = {
  type: "Image",
  url: "https://placehold.co/400",
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
