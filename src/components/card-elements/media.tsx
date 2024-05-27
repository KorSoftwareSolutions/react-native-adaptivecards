import React from "react";
import { IMedia } from "./media.types";
import Video from "react-native-video";

const DEFAULT_PROPS: IMedia = {
  type: "Media",
  sources: [],
};

export const Media = (providedProps: IMedia) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  const hasSources = props.sources.length > 0;
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  if (!hasSources) {
    return null;
  }
  return <Video source={{ uri: props.sources[0].url }} />;
};
