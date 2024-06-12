import React from "react";
import { ActionMode, IActionWrapper } from "./action-wrapper.types";

const DEFAULT_PROPS: IActionWrapper = {
  isEnabled: true,
  mode: ActionMode.Primary,
};

const ActionWrapperContext = React.createContext<IActionWrapper | undefined>(undefined);

export const ActionWrapper = (providedProps: React.PropsWithChildren<IActionWrapper>) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <ActionWrapperContext.Provider value={props}>{props.children}</ActionWrapperContext.Provider>;
};

export const useActionWrapper = () => {
  const context = React.useContext(ActionWrapperContext);
  if (!context) {
    throw new Error("useActionWrapper must be used within a ActionWrapper");
  }
  return context;
};
