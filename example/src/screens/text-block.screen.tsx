import { AdaptiveCard } from "adaptivecards-rn";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { TextBlockSamples } from "../../samples/text-block";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";

export const TextBlockScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <AdaptiveCardDemo title="General" payload={TextBlockSamples.main} />
      {/* <AdaptiveCardDemo title="Colors" payload={TextBlockSamples.colors} />
      <AdaptiveCardDemo title="Font Type" payload={TextBlockSamples.fontType} />
      <AdaptiveCardDemo title="Horizontal Alignment" payload={TextBlockSamples.horizontalAlignment} />
      <AdaptiveCardDemo title="Is Subtle" payload={TextBlockSamples.isSubtle} />
      <AdaptiveCardDemo title="Max Lines" payload={TextBlockSamples.maxLines} />
      <AdaptiveCardDemo title="Size" payload={TextBlockSamples.size} />
      <AdaptiveCardDemo title="Style" payload={TextBlockSamples.style} />
      <AdaptiveCardDemo title="Weight" payload={TextBlockSamples.weight} />
      <AdaptiveCardDemo title="Wrap" payload={TextBlockSamples.wrap} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
  },
  content: {
    padding: 10,
    rowGap: 10,
  },
});
