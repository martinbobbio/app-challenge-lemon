// React
import { useEffect } from "react";
// React Native
import { StyleSheet, ScrollView } from "react-native";
// Components
import { View } from "../../components/Themed";
import { CoinListItem } from "../../components/CoinListItem";
import { CoinListLabels } from "../../components/CoinListLabels";
import { EmptyState } from "../../components/EmptyState";
import { Loading } from "../../components/Loading";
// Hooks
import { useCoins, useGlobalContext } from "../../hooks";

export default function Coins() {
  const {
    filters: { search },
  } = useGlobalContext();
  const {
    adapted: coinList,
    swr: { error, isLoading },
  } = useCoins(true, { search });
  const shouldRender = {
    main: !!coinList?.length && !isLoading && !error,
    searchNotFound: !!!coinList?.length && !isLoading && !error,
    isLoading: isLoading && !error,
    error: error,
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {shouldRender.main && (
          <>
            <CoinListLabels />
            {coinList?.map((coin, i) => (
              <CoinListItem key={i} {...coin} />
            ))}
            {/* <CoinListItem
          image="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          id="bitcoin"
          market_cap={{ original: 24, formatted: "24 Bn" }}
          price={{ original: 18000, formatted: "18000.40" }}
          variation={{
            original: 1.444,
            formatted: "1.44%",
            color: "#16c784",
            icon: "arrow-drop-up",
          }}
          symbol="BTC"
          rank={1}
        />
        <CoinListItem
          image="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850"
          id="binancecoin"
          market_cap={{ original: 24, formatted: "3.54 Bn" }}
          price={{ original: 350, formatted: "350.40" }}
          variation={{
            original: 1.444,
            formatted: "1.44%",
            color: "#ea3943",
            icon: "arrow-drop-up",
          }}
          symbol="BNB"
          rank={2}
        /> */}
          </>
        )}
        {shouldRender.searchNotFound && (
          <EmptyState
            title="Coin not found"
            description="Try searching again"
            icon="info"
          />
        )}
        {shouldRender.error && (
          <EmptyState
            title="API Limit Exceeded"
            description="Try again in a few minutes"
            icon="error"
          />
        )}
        {shouldRender.isLoading && <Loading />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});
