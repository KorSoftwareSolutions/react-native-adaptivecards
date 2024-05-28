import { AdaptiveCard } from "adaptivecards-rn";
import React from "react";
import { ScreenContainer } from "../components/screen-container";
import { adaptiveCardSamples } from "../../samples/adaptive-card";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";

export const AdaptiveCardScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={adaptiveCardSamples.main} />
      <AdaptiveCardDemo title="Authentication" payload={adaptiveCardSamples.authentication} />
      <AdaptiveCardDemo title="Background Image" payload={adaptiveCardSamples.backgroundImage} />
      <AdaptiveCardDemo title="Min Height" payload={adaptiveCardSamples.minHeight} />
      <AdaptiveCardDemo title="Refresh" payload={adaptiveCardSamples.refresh} />
      <AdaptiveCardDemo title="RTL" payload={adaptiveCardSamples.rtl} />
    </ScreenContainer>
  );
};
