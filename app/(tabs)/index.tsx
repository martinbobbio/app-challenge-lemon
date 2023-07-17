// React
import { useEffect } from "react";
// React Native
import { StyleSheet, ScrollView } from "react-native";
// Components
import { View } from "../../components/Themed";
import { CardCoin } from "../../components/CardCoin";
// Hooks
import { useCoins, useGlobalContext } from "../../hooks";

export default function TabOneScreen() {
  // const { adapted } = useCoins();
  const { filters } = useGlobalContext();

  useEffect(() => {
    if (filters.search) {
      console.log(filters.search);
    }
  }, [filters]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* {adapted?.map((coin, i) => (
          <CardCoin key={i} {...coin} />
        ))} */}
        <CardCoin
          image="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          id="bitcoin"
          market_cap={{ original: 24, formatted: "24 Bn" }}
          price={{ original: 18000, formatted: "18000.40" }}
          variation={{ original: 1.444, formatted: "1.44%", isPositive: true }}
          symbol="BTC"
          rank={1}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});
