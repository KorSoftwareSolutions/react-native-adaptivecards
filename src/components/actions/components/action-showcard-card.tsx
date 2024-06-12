import React from "react";
import { AdaptiveCard } from "../../cards/adaptive-card";
import { useAdaptiveCard } from "../../../hooks/useHostConfig";

export const ActionShowCardCard = () => {
  /* ******************** Hooks ******************** */
  const { showCard, hostConfig } = useAdaptiveCard();
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  if (!showCard) {
    return null;
  }
  return <AdaptiveCard hostConfig={hostConfig} payload={showCard} />;
};
