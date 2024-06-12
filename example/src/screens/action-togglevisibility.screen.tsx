import React from "react";
import { ScreenContainer } from "../components/screen-container";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";
import { actionToggleVisibilitySamples } from "../../samples/action-togglevisibility";

export const ActionToggleVisibilityScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={actionToggleVisibilitySamples.general} />
      <AdaptiveCardDemo title="Is Enabled" payload={actionToggleVisibilitySamples.isEnabled} />
      <AdaptiveCardDemo title="Tooltip" payload={actionToggleVisibilitySamples.tooltip} />
    </ScreenContainer>
  );
};
