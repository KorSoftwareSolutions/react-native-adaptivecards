import React, { useMemo } from "react";
import { ICardElement } from "./card-element.types";
import { elementFactory } from "../../element-factory";
import { Separator } from "../others/separator";

const DEFAULT_PROPS: ICardElement = {
  isVisible: true,
};

export const CardElement = (providedProps: React.PropsWithChildren<ICardElement>) => {
  const props = { ...DEFAULT_PROPS, ...providedProps };
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  const FallbackElement = useMemo(() => {
    if (!props.fallback || props.fallback === "drop") {
      return null;
    }
    const Element = elementFactory.getElement(props.fallback.type);
    return Element;
  }, [props.fallback]);

  const isInvalid = false;
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  if (!props.isVisible) {
    return null;
  }

  return (
    <>
      {props.separator && <Separator />}
      {props.children}
    </>
  );
};
