import React from "react";
import { ScreenContainer } from "../components/screen-container";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";
import { actionExecuteSamples } from "../../samples/action-execute";

export const ActionExecuteScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={actionExecuteSamples.general} />
      <AdaptiveCardDemo title="Is Enabled" payload={actionExecuteSamples.isEnabled} />
      <AdaptiveCardDemo title="Tooltip" payload={actionExecuteSamples.tooltip} />
      <AdaptiveCardDemo title="Style" payload={actionExecuteSamples.style} />
      <AdaptiveCardDemo title="Mode" payload={actionExecuteSamples.mode} />
    </ScreenContainer>
  );
};
