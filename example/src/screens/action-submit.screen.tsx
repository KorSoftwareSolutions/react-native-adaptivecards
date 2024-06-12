import React from "react";
import { ScreenContainer } from "../components/screen-container";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";
import { actionSubmitSamples } from "../../samples/action-submit";

export const ActionSubmitScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={actionSubmitSamples.general} />
      <AdaptiveCardDemo title="Associated Inputs" payload={actionSubmitSamples.associatedInputs} />
      <AdaptiveCardDemo title="Is Enabled" payload={actionSubmitSamples.isEnabled} />
      <AdaptiveCardDemo title="Tooltip" payload={actionSubmitSamples.tooltip} />
      <AdaptiveCardDemo title="Mode" payload={actionSubmitSamples.mode} />
    </ScreenContainer>
  );
};
