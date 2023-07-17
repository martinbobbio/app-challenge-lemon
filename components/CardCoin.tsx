// React
import React from "react";
// React Native
import { StyleSheet, Image } from "react-native";
import { Link } from "@react-navigation/native";
// Components
import { Text, View } from "./Themed";
// Types
import { CoinListAdapted } from "../types";

export function CardCoin({
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
      <Link to={{ screen: "detail", params: { id } }}>
        <Text style={styles.rank}>{rank}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.market_cap}>{market_cap.formatted}</Text>
        <Text style={styles.price}>{price.formatted}</Text>
        <Text
          style={{
            ...styles.variation,
            color: variation.isPositive ? "#16c784" : "#ea3943",
          }}
        >
          {variation.formatted}
        </Text>
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
    left: "48px",
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
    left: "80px",
    top: "16px",
    lineHeight: 0,
    fontWeight: "700",
  },
  market_cap: {
    color: "#cfd6e4",
    fontSize: 11,
    position: "absolute",
    left: "80px",
    top: "32px",
    lineHeight: 0,
  },
  price: {
    position: "absolute",
    left: "180px",
    top: "24px",
    lineHeight: 0,
    fontWeight: "700",
  },
  variation: {
    position: "absolute",
    right: "24px",
    top: "24px",
    lineHeight: 0,
    fontWeight: "700",
    // color: "#ea3943",
    color: "#16c784",
  },
});
