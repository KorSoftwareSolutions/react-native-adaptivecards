import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TextBlockScreen } from "./screens/text-block.screen";
import { HomeScreen } from "./screens/home.screen";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { AdaptiveCardScreen } from "./screens/adaptive-card.screen";
import { ImageScreen } from "./screens/image.screen";

export type IRootStackParamList = {
  Home: undefined;
  AdaptiveCard: undefined;
  TextBlock: undefined;
  Image: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IRootStackParamList {}
  }
}

const RootStack = createNativeStackNavigator<IRootStackParamList>();

export const Router = () => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <RootStack.Navigator screenOptions={{ contentStyle: { marginBottom: initialWindowMetrics?.insets.bottom } }}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="AdaptiveCard" component={AdaptiveCardScreen} />
      <RootStack.Screen name="TextBlock" component={TextBlockScreen} />
      <RootStack.Screen name="Image" component={ImageScreen} />
    </RootStack.Navigator>
  );
};
