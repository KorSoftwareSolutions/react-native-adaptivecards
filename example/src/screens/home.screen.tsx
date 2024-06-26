import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

interface IMenuItemProps {
  text: string;
  onPress: () => void;
}

const MenuItem = (props: IMenuItemProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.menuItemContainer}>
      <Text style={styles.menuItemText}>{props.text}</Text>
      <Feather name="chevron-right" size={16} />
    </TouchableOpacity>
  );
};

export const HomeScreen = () => {
  /* ******************** Hooks ******************** */
  const { navigate } = useNavigation();

  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <MenuItem text="Adaptive Card" onPress={() => navigate("AdaptiveCard")} />
      <MenuItem text="TextBlock" onPress={() => navigate("TextBlock")} />
      <MenuItem text="Image" onPress={() => navigate("Image")} />
      <MenuItem text="Media" onPress={() => navigate("Media")} />
      <MenuItem text="RichTextBlock" onPress={() => navigate("RichTextBlock")} />

      <MenuItem text="ActionSet" onPress={() => navigate("ActionSet")} />

      <MenuItem text="Action.Execute" onPress={() => navigate("ActionExecute")} />
      <MenuItem text="Action.OpenUrl" onPress={() => navigate("ActionOpenUrl")} />
      <MenuItem text="Action.ShowCard" onPress={() => navigate("ActionShowCard")} />
      <MenuItem text="Action.Submit" onPress={() => navigate("ActionSubmit")} />
      <MenuItem text="Action.ToggleVisibility" onPress={() => navigate("ActionToggleVisibility")} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
  },
  content: {
    padding: 10,
    rowGap: 10,
  },

  menuItemContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
  },
});
