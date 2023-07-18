// React
import React from "react";
// React Native
import { StyleSheet } from "react-native";
// Expo
import { MaterialIcons } from "@expo/vector-icons";
// Components
import { Text, View } from "./Themed";

/**
 * Functional component that render a loading icon
 *
 * @return React.ReactNode <Loading/>
 */
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
