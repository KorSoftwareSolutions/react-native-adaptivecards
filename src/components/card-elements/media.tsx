import React, { useState, useEffect } from "react";
import { ICaptionSource, IMedia, IMediaProps, IMediaSource } from "./media.types";
import WebView from "react-native-webview";
import { TextBlock } from "./text-block";
import { StyleSheet, Image, TouchableOpacity, StyleProp, ImageStyle, ImageBackground, ViewStyle } from "react-native";
import { Colors } from "../../utils/design-tokens";
import { imageUtils } from "../../utils/image.utils";
import { useHostConfig } from "../../hooks/useHostConfig";

const DEFAULT_PROPS: Required<IMediaProps> = {
  altText: "",
  poster: "https://placehold.co/400",
  sources: [],
  captionSources: [],
};

const generateVideoHtml = (sources: IMediaSource[], captions: ICaptionSource[]) => `
  <video controls autoplay style="width: 100%;">
   ${sources.map(
     (source) => `
      <source src="${source.url}" type="${source.mimeType}">
    `
   )}
   ${captions.map(
     (caption) => `
        <track src="${caption.url}" kind="subtitles" label="${caption.label}">
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

const generateBodyHtml = (children: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
</head>
  <body style="background-color: transparent; padding: 0; margin: 0;">
    ${children}
  </body>
</html>`;

export const Media = (providedProps: IMedia) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  const { hostConfig } = useHostConfig();
  const [isPlaying, setIsPlaying] = useState(false);
  const [posterImageSize, setPosterImageSize] = useState<{ width: number; height: number } | null>(null);

  /* ******************** Variables ******************** */
  const mediaType = props.sources.length ? props.sources[0].mimeType.split("/")[0] : null;
  const posterImageAspectRatio = !posterImageSize ? 1 : posterImageSize.width / posterImageSize.height;

  const posterStyles: StyleProp<ImageStyle> = {
    minHeight: 75,
    aspectRatio: posterImageAspectRatio,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
  };

  const audioContainerStyles: StyleProp<ViewStyle> = {
    height: 36,
  };

  const videoContainerStyles: StyleProp<ViewStyle> = {
    aspectRatio: posterImageAspectRatio,
  };

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  useEffect(() => {
    imageUtils.getSize(props.poster).then((size) => {
      setPosterImageSize(size);
    });
  }, []);
  /* ******************** JSX ******************** */
  if (!isPlaying) {
    return (
      <ImageBackground source={{ uri: props.poster }} style={posterStyles} alt={props.altText}>
        <TouchableOpacity onPress={() => setIsPlaying(true)}>
          <Image source={require("../../assets/icons/play.png")} style={styles.playButton} />
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  if (mediaType === "video") {
    return (
      <WebView
        source={{ html: generateBodyHtml(generateVideoHtml(props.sources, props.captionSources)) }}
        scalesPageToFit
        scrollEnabled={false}
        containerStyle={videoContainerStyles}
        style={styles.webView}
      />
    );
  }
  if (mediaType === "audio") {
    return (
      <WebView
        source={{ html: generateBodyHtml(generateAudioHtml(props.sources)) }}
        scrollEnabled={false}
        containerStyle={audioContainerStyles}
        style={styles.webView}
      />
    );
  }
  return <TextBlock type="TextBlock" text="Failed to render media" color={Colors.Warning} />;
};

const styles = StyleSheet.create({
  playButton: {
    width: 50,
    height: 50,
  },
  webView: {
    backgroundColor: "transparent",
  },
});
