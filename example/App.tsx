import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/router";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("./src/assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("./src/assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("./src/assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "RobotoMono-Bold": require("./src/assets/fonts/RobotoMono-Bold.ttf"),
    "RobotoMono-BoldItalic": require("./src/assets/fonts/RobotoMono-BoldItalic.ttf"),
    "RobotoMono-Italic": require("./src/assets/fonts/RobotoMono-Italic.ttf"),
    "RobotoMono-Light": require("./src/assets/fonts/RobotoMono-Light.ttf"),
    "RobotoMono-LightItalic": require("./src/assets/fonts/RobotoMono-LightItalic.ttf"),
    "RobotoMono-Regular": require("./src/assets/fonts/RobotoMono-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  );
}
