import React from "react";
import { ScreenContainer } from "../components/screen-container";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";
import { imageSamples } from "../../samples/image";

export const ImageScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={imageSamples.main} />
      <AdaptiveCardDemo title="Background Color" payload={imageSamples.backgroundColor} />
      <AdaptiveCardDemo title="Height" payload={imageSamples.height} />
      <AdaptiveCardDemo title="Horizontal Alignment" payload={imageSamples.horizontalAlignment} />
      <AdaptiveCardDemo title="Select Action" payload={imageSamples.selectAction} />
      <AdaptiveCardDemo title="Size" payload={imageSamples.size} />
      <AdaptiveCardDemo title="Style" payload={imageSamples.style} />
    </ScreenContainer>
  );
};
