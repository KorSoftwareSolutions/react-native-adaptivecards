import React from "react";
import { ScreenContainer } from "../components/screen-container";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";
import { actionShowCardSamples } from "../../samples/action-showcard";

export const ActionShowCardScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={actionShowCardSamples.general} />
      <AdaptiveCardDemo title="Is Enabled" payload={actionShowCardSamples.isEnabled} />
      <AdaptiveCardDemo title="Tooltip" payload={actionShowCardSamples.tooltip} />
      <AdaptiveCardDemo title="Mode" payload={actionShowCardSamples.mode} />
    </ScreenContainer>
  );
};
