import React from "react";
import { IActionOpenUrl, IActionOpenUrlProps } from "./action-openurl.types";
import { ActionButton } from "./components/action-button";

const DEFAULT_PROPS: IActionOpenUrlProps = {
  url: "",
};

export const ActionOpenUrl = (providedProps: IActionOpenUrl) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */

  /* ******************** Functions ******************** */
  const onPress = () => {
    console.log("Opening URL: ", props.url);
  };

  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return <ActionButton onPress={onPress} />;
};
