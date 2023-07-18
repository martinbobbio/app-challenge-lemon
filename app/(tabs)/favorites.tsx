import { useEffect, useState } from "react";
// React Native
import { StyleSheet } from "react-native";
// Components
import { View } from "../../components/Themed";
import { CoinListLabels } from "../../components/CoinListLabels";
import { CoinListItem } from "../../components/CoinListItem";
import { Loading } from "../../components/Loading";
// Hooks
import { useAsyncStorage, useCoins } from "../../hooks";
import { EmptyState } from "../../components/EmptyState";

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
        <>
          <CoinListLabels />
          {coinList?.map((coin, i) => (
            <CoinListItem key={i} {...coin} />
          ))}
        </>
      )}
      {shouldRender.favoritesNotFound && (
        <EmptyState
          title="Add Coins to favorites"
          description="You can add to favorites by touching the star on the cryptocurrency"
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
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});
