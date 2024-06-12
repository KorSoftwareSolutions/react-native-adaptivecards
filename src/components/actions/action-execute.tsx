import React from "react";
import { IActionExecute, IActionExecuteProps } from "./action-execute.types";
import { AssociatedInputs } from "./action.types";
import { ActionButton } from "./components/action-button";

const DEFAULT_PROPS: IActionExecuteProps = {
  associatedInputs: AssociatedInputs.Auto,
};

export const ActionExecute = (providedProps: IActionExecute) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  const onPress = () => {};

  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <ActionButton onPress={onPress} />;
};
