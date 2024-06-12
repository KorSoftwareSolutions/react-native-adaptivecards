import React from "react";
import { IActionShowCardProps } from "./action-showcard.types";
import { ActionButton } from "./components/action-button";
import { useHostConfig } from "../../hooks/useHostConfig";

const DEFAULT_PROPS: IActionShowCardProps = {
  card: {
    type: "AdaptiveCard",
    version: "1.0",
    body: [],
  },
};

export const ActionShowCard = (providedProps: IActionShowCardProps) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  const { card, setShowCard } = useHostConfig();
  /* ******************** Variables ******************** */
  props.card.version = card.version;

  /* ******************** Functions ******************** */
  const onPress = () => {
    setShowCard({ ...props.card, version: card.version });
  };
  
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <ActionButton onPress={onPress} />;
};
