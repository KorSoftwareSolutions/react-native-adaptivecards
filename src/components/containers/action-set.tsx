import React from "react";
import { IActionSet, IActionSetProps } from "./action-set.types";

const DEFAULT_PROPS: IActionSetProps = {
  actions: [],
};

export const ActionSet = (providedProps: IActionSet) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <></>;
};
