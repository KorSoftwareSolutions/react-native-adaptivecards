import React from "react";
import { Text } from "react-native";
import { IAdaptiveCard } from "./adaptive-card.types";
import { semverUtils } from "../../utils/semver-utils";
import { elementFactory } from "../../utils/element-factory";
import { CardElement } from "../card-elements/card-element";
import { IHostConfig } from "../../utils/host-config-models";
import { AdaptiveCardProvider } from "../../hooks/useHostConfig";
import { AdaptiveCardContainer } from "./adaptive-card-container";
import { ActionsContainer } from "../actions/components/actions-container";
import { ActionShowCardCard } from "../actions/components/action-showcard-card";

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
    <AdaptiveCardProvider hostConfig={props.hostConfig} card={props.payload}>
      <AdaptiveCardContainer {...props.payload}>
        {props.payload.body?.map((element, index) => {
          const Element = elementFactory.getCardElement(element.type);
          if (!Element) {
            return null;
          }
          return (
            <CardElement {...element} key={index}>
              <Element {...element} />
            </CardElement>
          );
        })}
        {!!props.payload.actions && <ActionsContainer actions={props.payload.actions} />}
      </AdaptiveCardContainer>
      <ActionShowCardCard />
    </AdaptiveCardProvider>
  );
};
