// React Native
import { StyleSheet } from "react-native";
// Expo
import { useLocalSearchParams } from "expo-router";
// Components
import { Text, View } from "../components/Themed";
import { CoinDetail } from "../components/CoinDetail";
// Hooks
import { useCoinDetail } from "../hooks";

export default function Favorites() {
  const { id } = useLocalSearchParams();
  const { adapted: coinDetail } = useCoinDetail(id as string);

  return (
    <View style={styles.container}>
      {coinDetail && <CoinDetail {...coinDetail} />}
      <CoinDetail
        {...{
          id: "bitcoin",
          image:
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          name: "Bitcoin",
          symbol: "BTC",
          rank: 1,
          price: { original: 30133, formatted: "30133.00" },
          variation_24h: {
            original: -0.87416,
            formatted: "-0.87%",
            color: "#16c784",
          },
          variation_7d: {
            original: -0.58349,
            formatted: "-0.58%",
            color: "#16c784",
          },
          variation_30d: {
            original: 13.92672,
            formatted: "13.93%",
            color: "#ea3943",
          },
          variation_1y: {
            original: 42.42423,
            formatted: "42.42%",
            color: "#ea3943",
          },
          market_cap: {
            original: 24000000000,
            formatted: "24 Bn",
          },
          description: "Lorem ipsumx",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});
