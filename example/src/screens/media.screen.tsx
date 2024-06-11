import React from "react";
import { ScreenContainer } from "../components/screen-container";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";
import { mediaSamples } from "../../samples/media";

export const MediaScreen = () => {
  /* ******************** Hooks ******************** */
  console.log(mediaSamples)
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={mediaSamples.main} />
      <AdaptiveCardDemo title="Sources" payload={mediaSamples.sources} />
    </ScreenContainer>
  );
};
