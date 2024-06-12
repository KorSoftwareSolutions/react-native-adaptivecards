import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TextBlockScreen } from "./screens/text-block.screen";
import { HomeScreen } from "./screens/home.screen";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { AdaptiveCardScreen } from "./screens/adaptive-card.screen";
import { ImageScreen } from "./screens/image.screen";
import { MediaScreen } from "./screens/media.screen";
import { RichTextBlockScreen } from "./screens/rich-text-block.screen";
import { ActionSetScreen } from "./screens/action-set.screen";
import { ActionExecuteScreen } from "./screens/action-execute.screen";
import { ActionOpenUrlScreen } from "./screens/action-openurl.screen";
import { ActionShowCardScreen } from "./screens/action-showcard.screen";
import { ActionSubmitScreen } from "./screens/action-submit.screen";
import { ActionToggleVisibilityScreen } from "./screens/action-togglevisibility.screen";

export type IRootStackParamList = {
  Home: undefined;
  AdaptiveCard: undefined;
  TextBlock: undefined;
  Image: undefined;
  Media: undefined;
  RichTextBlock: undefined;
  ActionSet: undefined;
  ActionExecute: undefined;
  ActionOpenUrl: undefined;
  ActionShowCard: undefined;
  ActionSubmit: undefined;
  ActionToggleVisibility: undefined;
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
      <RootStack.Screen name="Media" component={MediaScreen} />
      <RootStack.Screen name="RichTextBlock" component={RichTextBlockScreen} />
      <RootStack.Screen name="ActionSet" component={ActionSetScreen} />
      <RootStack.Screen name="ActionExecute" component={ActionExecuteScreen} />
      <RootStack.Screen name="ActionOpenUrl" component={ActionOpenUrlScreen} />
      <RootStack.Screen name="ActionShowCard" component={ActionShowCardScreen} />
      <RootStack.Screen name="ActionSubmit" component={ActionSubmitScreen} />
      <RootStack.Screen name="ActionToggleVisibility" component={ActionToggleVisibilityScreen} />
    </RootStack.Navigator>
  );
};
