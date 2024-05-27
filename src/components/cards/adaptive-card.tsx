import React from "react";
import { View, StyleSheet, Text } from "react-native";

export type IAdaptiveCardProps = {
  payload: object;
  onExecuteAction?: Function;
  onActionSubmit?: Function;
  onActionOpenUrl?: Function;
  onActionShowCard?: Function;
  onError?: Function;
  style?: object;
  hostConfig?: object;
};

export const AdaptiveCard = (props: IAdaptiveCardProps) => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(props.payload, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
