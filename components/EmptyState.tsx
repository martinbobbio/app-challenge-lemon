// React
import React from "react";
// React Native
import { StyleSheet } from "react-native";
// Expo
import { MaterialIcons } from "@expo/vector-icons";
// Components
import { Text, View } from "./Themed";

interface EmptyStateProps {
  title: string;
  description: string;
  icon: "warning" | "info" | "error";
}

/**
 * Functional component that render a empty state
 *
 * @return React.ReactNode <EmptyState/>
 */
export function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={64} color="white" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 18,
    marginTop: 16,
    paddingHorizontal: 16,
  },
});
