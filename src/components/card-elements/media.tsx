import React, { useState } from "react";
import { IMedia, IMediaSource } from "./media.types";
import WebView from "react-native-webview";
import { TextBlock } from "./text-block";
import { StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";

const DEFAULT_PROPS: IMedia = {
  type: "Media",
  poster: "https://placehold.co/400",
  sources: [],
};

const generateVideoHtml = (sources: IMediaSource[]) => `
  <video controls autoplay style="width: 100%;">
   ${sources.map(
     (source) => `
      <source src="${source.url}" type="${source.mimeType}">
    `
   )}
    Your browser does not support the video tag.
  </video>
`;

const generateAudioHtml = (sources: IMediaSource[]) => `
  <audio controls autoplay style="width: 100%;">
    ${sources.map(
      (source) => `
          <source src="${source.url}" type="${source.mimeType}">
        `
    )}
    Your browser does not support the audio tag.
  </audio>
`;

export const Media = (providedProps: IMedia) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  const [isPlaying, setIsPlaying] = useState(false);

  /* ******************** Variables ******************** */
  const hasSources = !!props.sources.length;
  const mediaType = hasSources ? props.sources[0].mimeType.split("/")[0] : null;
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  if (!isPlaying) {
    return (
      <TouchableOpacity onPress={() => setIsPlaying(true)} style={styles.container}>
        <Image source={{ uri: props.poster }} style={styles.posterImage} />
        <Image source={require("../../assets/play.png")} style={styles.playButton} />
      </TouchableOpacity>
    );
  }

  if (mediaType === "video") {
    return <WebView source={{ html: generateVideoHtml(props.sources) }} containerStyle={styles.videoContainer} scalesPageToFit />;
  }
  if (mediaType === "audio") {
    return <WebView source={{ html: generateAudioHtml(props.sources) }} containerStyle={styles.container} />;
  }
  return <TextBlock type="TextBlock" text="Failed to render media" />;
};

const styles = StyleSheet.create({
  container: {
    minHeight: 75,
  },
  videoContainer: {
    minHeight: 150,
  },
  posterImage: {
    resizeMode: "stretch",
    minHeight: 75,
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: 50,
    height: 50,
  },
});
