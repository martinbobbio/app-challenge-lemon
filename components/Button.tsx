// React
import React from "react";
// React Native
import { StyleSheet, TouchableOpacity } from "react-native";
// Components
import { Text, View } from "./Themed";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

/**
 * Functional component that render a button.
 *
 * @return React.ReactNode <Button/>
 */
export function Button({ children, onPress }: ButtonProps) {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <Text>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3861fb",
    borderRadius: 6,
    fontWeight: "700",
    paddingHorizontal: 12,
    paddingVertical: 4,
    textAlign: "center",
  },
});
