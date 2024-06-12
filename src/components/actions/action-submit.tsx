import React from "react";
import { IActionSubmitProps } from "./action-submit.types";
import { AssociatedInputs } from "./action.types";
import { ActionButton } from "./components/action-button";

const DEFAULT_PROPS: IActionSubmitProps = {
  associatedInputs: AssociatedInputs.Auto,
};

export const ActionSubmit = (providedProps: IActionSubmitProps) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  const onPress = () => {
    console.log("Action.Submit pressed");
  };
  
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <ActionButton onPress={onPress} />;
};
