import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export const ScreenContainer = (props: React.PropsWithChildren) => {
  /* ******************** Hooks ******************** */
  /* ******************** Variables ******************** */
  /* ******************** Functions ******************** */
  /* ******************** Effects ******************** */
  /* ******************** JSX ******************** */
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      {props.children}
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
});
