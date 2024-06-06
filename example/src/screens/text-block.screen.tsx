import React from "react";
import { TextBlockSamples } from "../../samples/text-block";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";
import { ScreenContainer } from "../components/screen-container";

export const TextBlockScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={TextBlockSamples.main} />
      <AdaptiveCardDemo title="Markdown" payload={TextBlockSamples.markdown} />
      <AdaptiveCardDemo title="Colors" payload={TextBlockSamples.colors} />
      <AdaptiveCardDemo title="Font Type" payload={TextBlockSamples.fontType} />
      <AdaptiveCardDemo title="Horizontal Alignment" payload={TextBlockSamples.horizontalAlignment} />
      <AdaptiveCardDemo title="Is Subtle" payload={TextBlockSamples.isSubtle} />
      <AdaptiveCardDemo title="Max Lines" payload={TextBlockSamples.maxLines} />
      <AdaptiveCardDemo title="Size" payload={TextBlockSamples.size} />
      <AdaptiveCardDemo title="Style" payload={TextBlockSamples.style} />
      <AdaptiveCardDemo title="Weight" payload={TextBlockSamples.weight} />
      <AdaptiveCardDemo title="Wrap" payload={TextBlockSamples.wrap} />
    </ScreenContainer>
  );
};
