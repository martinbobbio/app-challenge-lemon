// React
import React from "react";
// React Native
import { StyleSheet } from "react-native";
// Expo
import { MaterialIcons } from "@expo/vector-icons";
// Components
import { Text, View } from "./Themed";

export function Loading() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="hourglass-top" size={64} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 80,
  },
});
