import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { AdaptiveCard } from "adaptivecards-rn";
import payload from "./payloads/example1.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AdaptiveCard payload={payload} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    padding: 20,
  },
});
