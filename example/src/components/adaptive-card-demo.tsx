import { AdaptiveCard } from "adaptivecards-rn";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  title: string;
  payload: any;
}

export const AdaptiveCardDemo = (props: IProps) => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <AdaptiveCard payload={props.payload} />
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
