import React from "react";
import { ScreenContainer } from "../components/screen-container";
import { AdaptiveCardDemo } from "../components/adaptive-card-demo";
import { actionSetSamples } from "../../samples/action-set";

export const ActionSetScreen = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScreenContainer>
      <AdaptiveCardDemo title="General" payload={actionSetSamples.general} />
    </ScreenContainer>
  );
};
