import React from "react";
import { IHostConfig } from "../utils/host-config-models";
import { defaultHostConfig } from "../utils/host-config-default";
import { deepMergeObjects } from "../utils/object-merge.utils";
import { IAdaptiveCard } from "../components/cards/adaptive-card.types";

interface IAdaptiveCardContext {
  hostConfig: IHostConfig;
  card: IAdaptiveCard;
  showCard?: IAdaptiveCard;
  setShowCard: (card: IAdaptiveCard) => void;
}

export interface IAdaptiveCardProviderProps {
  hostConfig?: IHostConfig;
  card: IAdaptiveCard;
}

const AdaptiveCardContext = React.createContext<IAdaptiveCardContext | undefined>(undefined);

export const AdaptiveCardProvider = (props: React.PropsWithChildren<IAdaptiveCardProviderProps>) => {
  /* ******************** Hooks ******************** */
  const [showCard, setShowCard] = React.useState<IAdaptiveCard | undefined>(undefined);

  /* ******************** Variables ******************** */
  const hostConfig: IHostConfig = props.hostConfig ? deepMergeObjects(defaultHostConfig, props.hostConfig) : defaultHostConfig;

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <AdaptiveCardContext.Provider value={{ hostConfig, card: props.card, showCard, setShowCard }}>{props.children}</AdaptiveCardContext.Provider>
  );
};

export const useAdaptiveCard = () => {
  const context = React.useContext(AdaptiveCardContext);
  if (!context) {
    throw new Error("useAdaptiveCard must be used within a AdaptiveCardProvider");
  }
  return context;
};

export const useHostConfig = () => {
  const context = React.useContext(AdaptiveCardContext);
  if (!context) {
    throw new Error("useHostConfig must be used within a AdaptiveCardProvider");
  }
  return context;
};
