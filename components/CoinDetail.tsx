// React
import React from "react";
// React Native
import { StyleSheet, Image } from "react-native";
// Expo
import { MaterialIcons } from "@expo/vector-icons";
// Components
import { Text, View } from "./Themed";
// Types
import { CoinDetailAdapted } from "../types";

/**
 * Functional component that render a coin detail with their props
 *
 * @return React.ReactNode <CoinDetails/>
 */
export function CoinDetail({
  rank,
  price,
  name,
  variation_24h,
  market_cap,
  description,
}: CoinDetailAdapted) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
        {rank && <Text style={styles.rank}>#{rank}</Text>}
      </Text>
      <View style={styles.containerPriceAndVariation}>
        <Text style={styles.price}>US$ {price.formatted}</Text>
        {variation_24h.original && (
          <Text
            style={{
              ...styles.variation,
              backgroundColor: variation_24h.color,
            }}
          >
            <MaterialIcons name={variation_24h.icon} size={14} color="white" />
            {variation_24h.formatted}
          </Text>
        )}
      </View>
      <Text style={styles.marketCap}>{market_cap.formatted}</Text>
      {description && (
        <View>
          <Text style={styles.descriptionLabel}>About {name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  name: {
    fontSize: 14,
  },
  rank: {
    fontSize: 12,
    marginLeft: 8,
    backgroundColor: "#323546",
    color: "#a1a7bb",
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  containerPriceAndVariation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
  },
  variation: {
    fontSize: 14,
    fontWeight: "700",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  marketCap: {
    marginTop: 8,
    fontSize: 12,
    color: "#cfd6e4",
  },
  descriptionLabel: {
    fontSize: 24,
    marginTop: 32,
  },
  description: {
    color: "#cfd6e4",
    fontSize: 12,
    marginTop: 8,
  },
});
