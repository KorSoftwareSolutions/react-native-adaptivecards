import React from "react";
import { ScreenContainer } from "../components/screen-container";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";
import { richTextBlockSamples } from "../../samples/rich-text-block";

export const RichTextBlockScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={richTextBlockSamples.general} />
    </ScreenContainer>
  );
};
