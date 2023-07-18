// React
import React from "react";
// React Native
import { StyleSheet, Image } from "react-native";
import { Link } from "@react-navigation/native";
// Expo
import { MaterialIcons } from "@expo/vector-icons";
// Components
import { Text, View } from "./Themed";
// Types
import { CoinListAdapted } from "../types";

export function CoinListItem({
  id,
  symbol,
  image,
  rank,
  price,
  variation,
  market_cap,
}: CoinListAdapted) {
  return (
    <View style={styles.container}>
      <Link to={{ screen: "detail", params: { id, image, symbol } }}>
        <Text style={styles.rank}>{rank}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.marketCap}>{market_cap.formatted}</Text>
        <Text style={styles.price}>{price.formatted}</Text>
        {variation.original && (
          <Text
            style={{
              ...styles.variation,
              color: variation.color,
            }}
          >
            <MaterialIcons
              name={variation.icon}
              size={14}
              color={variation.color}
            />
            {variation.formatted}
          </Text>
        )}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "48px",
    width: "100%",
  },
  image: {
    width: "24px",
    height: "24px",
    borderRadius: 24,
    position: "absolute",
    top: "12px",
    left: "56px",
  },
  rank: {
    position: "absolute",
    left: "16px",
    top: "24px",
    lineHeight: 0,
    fontWeight: "700",
  },
  symbol: {
    fontSize: 11,
    position: "absolute",
    left: "88px",
    top: "16px",
    lineHeight: 0,
    fontWeight: "700",
  },
  marketCap: {
    color: "#cfd6e4",
    fontSize: 11,
    position: "absolute",
    left: "88px",
    top: "32px",
    lineHeight: 0,
  },
  price: {
    position: "absolute",
    left: "188px",
    top: "24px",
    lineHeight: 0,
    fontWeight: "700",
  },
  variation: {
    position: "absolute",
    right: "24px",
    top: "18px",
    lineHeight: 14,
    display: "flex",
    fontWeight: "700",
  },
});
