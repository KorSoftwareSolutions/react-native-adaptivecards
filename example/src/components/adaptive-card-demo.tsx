import { AdaptiveCard, IHostConfig } from "adaptivecards-rn";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  title: string;
  payload: any;
  maxHeight?: number;
}

export const AdaptiveCardDemo = (props: IProps) => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  const hostConfig: IHostConfig = {
    fontFamily: {
      default: {
        bold: "Roboto-Bold",
        italicBold: "Roboto-BoldItalic",
        italic: "Roboto-Italic",
        light: "Roboto-Light",
        italicLight: "Roboto-LightItalic",
        regular: "Roboto-Regular",
      },
      monospace: {
        bold: "RobotoMono-Bold",
        italicBold: "RobotoMono-BoldItalic",
        italic: "RobotoMono-Italic",
        light: "RobotoMono-Light",
        italicLight: "RobotoMono-LightItalic",
        regular: "RobotoMono-Regular",
      },
    },
  };
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <View style={{ ...styles.container, maxHeight: props.maxHeight }}>
      <Text style={styles.title}>{props.title}</Text>
      <AdaptiveCard payload={props.payload} hostConfig={hostConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
  title: {
    fontSize: 16,
    color: "blue",
    fontWeight: "semibold",
  },
});
