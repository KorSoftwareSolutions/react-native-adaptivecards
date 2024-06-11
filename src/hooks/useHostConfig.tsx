import React from "react";
import { IHostConfig } from "../utils/host-config-models";
import { defaultHostConfig } from "../utils/host-config-default";

interface IAdaptiveCardContext {
  hostConfig: IHostConfig;
}

export interface IAdaptiveCardProviderProps {
  hostConfig?: IHostConfig;
}

const AdaptiveCardContext = React.createContext<IAdaptiveCardContext | undefined>(undefined);

export const AdaptiveCardProvider = (props: React.PropsWithChildren<IAdaptiveCardProviderProps>) => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  const hostConfig: IHostConfig = { ...defaultHostConfig, ...props.hostConfig };

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <AdaptiveCardContext.Provider value={{ hostConfig }}>{props.children}</AdaptiveCardContext.Provider>;
};

export const useHostConfig = () => {
  const context = React.useContext(AdaptiveCardContext);
  if (!context) {
    throw new Error("useHostConfig must be used within a AdaptiveCardProvider");
  }
  return context;
};
