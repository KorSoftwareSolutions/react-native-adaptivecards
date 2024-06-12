import React from "react";
import { ScreenContainer } from "../components/screen-container";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";
import { actionOpenUrlSamples } from "../../samples/action-openurl";

export const ActionOpenUrlScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={actionOpenUrlSamples.general} />
      <AdaptiveCardDemo title="Is Enabled" payload={actionOpenUrlSamples.isEnabled} />
      <AdaptiveCardDemo title="Tooltip" payload={actionOpenUrlSamples.tooltip} />
      <AdaptiveCardDemo title="Mode" payload={actionOpenUrlSamples.mode} />
    </ScreenContainer>
  );
};
