// React
import { useEffect, useRef } from "react";
// React Native
import { StyleSheet, ScrollView, Animated } from "react-native";
// Components
import { View } from "../../components/Themed";
import { CoinListItem } from "../../components/CoinListItem";
import { CoinListLabels } from "../../components/CoinListLabels";
import { EmptyState } from "../../components/EmptyState";
import { Loading } from "../../components/Loading";
import { Button } from "../../components/Button";
// Hooks
import { useCoins, useGlobalContext } from "../../hooks";
import { FadeIn } from "../../components/FadeIn";

/**
 * Functional component that render coin's list and get info by swr hooks.
 *
 * @return React.ReactNode <Coins/>
 */
export default function Coins() {
  const {
    filters: { search },
    setFilters,
  } = useGlobalContext();
  const {
    adapted: coinList,
    swr: { error, isLoading, mutate },
  } = useCoins(true, search ? { search } : undefined);
  const shouldRender = {
    main: !!coinList?.length && !isLoading && !error,
    searchNotFound: !!!coinList?.length && !isLoading && !error,
    isLoading: isLoading && !error,
    error: error,
  };

  /**
   * Function that reset search filter
   */
  const resetSearch = () => {
    setFilters({ search: "" });
    mutate();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {shouldRender.main && (
          <FadeIn>
            <CoinListLabels />
            {coinList?.map((coin, i) => (
              <CoinListItem key={i} {...coin} />
            ))}
          </FadeIn>
        )}
        {shouldRender.searchNotFound && (
          <>
            <EmptyState
              title="Coin not found"
              description="Try searching again"
              icon="info"
            />
            <View style={styles.buttonContainer}>
              <Button onPress={resetSearch}>Reset Search</Button>
            </View>
          </>
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
  buttonContainer: {
    marginTop: 32,
    width: 124,
    marginHorizontal: "auto",
  },
});
