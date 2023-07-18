// React
import React from "react";
// React Native
import { StyleSheet } from "react-native";
// Components
import { Text, View } from "./Themed";

export function CoinListLabels() {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, ...styles.rank }}>#</Text>
      <Text style={{ ...styles.label, ...styles.marketCap }}>Market Cap. </Text>
      <Text style={{ ...styles.label, ...styles.price }}>Price (USD)</Text>
      <Text style={{ ...styles.label, ...styles.variation }}>24h %</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "12px",
    width: "100%",
  },
  label: {
    color: "#cfd6e4",
    fontSize: 11,
    position: "absolute",
  },
  rank: {
    left: "16px",
  },
  price: {
    left: "180px",
  },
  variation: {
    right: "24px",
  },
  marketCap: {
    left: "48px",
  },
});
