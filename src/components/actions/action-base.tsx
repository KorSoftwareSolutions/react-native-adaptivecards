import React from "react";
import { ActionMode, IActionBase } from "./action-base.types";

const DEFAULT_PROPS: IActionBase = {
  isEnabled: true,
  mode: ActionMode.Primary,
};

export const Action = (providedProps: IActionBase) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <div></div>;
};
