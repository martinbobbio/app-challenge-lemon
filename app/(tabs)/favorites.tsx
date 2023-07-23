import { useEffect, useState } from "react";
// React Native
import { StyleSheet } from "react-native";
// Components
import { View } from "../../components/Themed";
import { CoinListLabels } from "../../components/CoinListLabels";
import { CoinListItem } from "../../components/CoinListItem";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import { FadeIn } from "../../components/FadeIn";
import { EmptyState } from "../../components/EmptyState";
// Hooks
import { useAsyncStorage, useCoins } from "../../hooks";

/**
 * Functional component that render favorites coins and get info by swr hooks.
 *
 * @return React.ReactNode <Favorites/>
 */
export default function Favorites() {
  const { favorites } = useAsyncStorage();
  const {
    adapted: coinList,
    swr: { isLoading, error },
  } = useCoins(!!favorites.length, {
    ids: favorites?.join(","),
  });
  const shouldRender = {
    main: !!coinList?.length && !isLoading && !error,
    favoritesNotFound: !!!coinList?.length && !isLoading && !error,
    isLoading: isLoading && !error,
    error: error,
  };

  return (
    <View style={styles.container}>
      {shouldRender.main && (
        <FadeIn>
          <CoinListLabels />
          {coinList?.map((coin, i) => (
            <CoinListItem key={i} {...coin} />
          ))}
        </FadeIn>
      )}
      {shouldRender.favoritesNotFound && (
        <EmptyState
          title="Add Coins to favorites"
          description="You can add to favorites by touching the star on the cryptocurrency"
          icon="info"
        />
      )}
      {shouldRender.error && <Error error={error} />}
      {shouldRender.isLoading && <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});
