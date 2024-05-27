import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { IAdaptiveCard } from "./adaptive-card.types";
import { semverUtils } from "../../utils/semver-utils";
import { TextBlock } from "../card-elements/text-block";
import { elementFactory } from "../../element-factory";
import { CardElement } from "../card-elements/card-element";

export type IAdaptiveCardProps = {
  payload: IAdaptiveCard;
  onExecuteAction?: Function;
  onActionSubmit?: Function;
  onActionOpenUrl?: Function;
  onActionShowCard?: Function;
  onError?: Function;
  style?: object;
  hostConfig?: object;
};

const SUPPORTED_VERSION = "1.6.0";

export const AdaptiveCard = (props: IAdaptiveCardProps) => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  const isPayloadVersionSupported = semverUtils.isSemverHigherOrEqual(props.payload.version, SUPPORTED_VERSION);

  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  if (!isPayloadVersionSupported) {
    return <Text>{props.payload.fallbackText ?? "This card version is not supported."}</Text>;
  }

  return (
    <View style={styles.container}>
      {props.payload.body?.map((element, index) => {
        const Element = elementFactory.getElement(element.type);
        if (!Element) {
          return null;
        }
        return (
          <CardElement {...element} key={index}>
            <Element {...element} />;
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
});
