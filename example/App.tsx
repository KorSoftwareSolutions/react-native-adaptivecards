import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { AdaptiveCard } from "adaptivecards-rn";
import payload from "../payloads/example1.json";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AdaptiveCard payload={payload} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
