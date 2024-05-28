import React from "react";
import { Text } from "react-native";
import { IAdaptiveCard } from "./adaptive-card.types";
import { semverUtils } from "../../utils/semver-utils";
import { elementFactory } from "../../element-factory";
import { CardElement } from "../card-elements/card-element";
import { IHostConfig } from "../../utils/host-config";
import { AdaptiveCardProvider } from "../../hooks/useHostConfig";
import { AdaptiveCardContainer } from "./adaptive-card-container";

export type IAdaptiveCardProps = {
  payload: IAdaptiveCard;
  onExecuteAction?: Function;
  onActionSubmit?: Function;
  onActionOpenUrl?: Function;
  onActionShowCard?: Function;
  onError?: Function;
  style?: object;
  hostConfig?: IHostConfig;
};

const SUPPORTED_VERSION = "1.6.0";

export const AdaptiveCard = (props: IAdaptiveCardProps) => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  const isPayloadVersionSupported = semverUtils.isSemverLowerOrEqual(props.payload.version, SUPPORTED_VERSION);

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  if (!isPayloadVersionSupported) {
    return <Text>{props.payload.fallbackText ?? "This card version is not supported."}</Text>;
  }

  return (
    <AdaptiveCardProvider hostConfig={props.hostConfig}>
      <AdaptiveCardContainer {...props.payload}>
        {props.payload.body?.map((element, index) => {
          const Element = elementFactory.getElement(element.type);
          if (!Element) {
            return null;
          }
          return (
            <CardElement {...element} key={index}>
              <Element {...element} />
            </CardElement>
          );
        })}
        {props.payload.actions?.map((action, index) => {
          const Element = elementFactory.getElement(action.type);
          if (!Element) {
            return null;
          }
          return <Element {...action} key={index} />;
        })}
      </AdaptiveCardContainer>
    </AdaptiveCardProvider>
  );
};
