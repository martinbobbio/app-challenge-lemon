// React Native
import { StyleSheet } from "react-native";
// Expo
import { useLocalSearchParams } from "expo-router";
// Components
import { View } from "../components/Themed";
import { CoinDetail } from "../components/CoinDetail";
import { Loading } from "../components/Loading";
import { FadeIn } from "../components/FadeIn";
import { Error } from "../components/Error";
// Hooks
import { useCoinDetail } from "../hooks";

/**
 * Functional component that render coin's detail and get info by swr hooks.
 *
 * @return React.ReactNode <Favorites/>
 */
export default function Favorites() {
  const { id } = useLocalSearchParams();
  const {
    adapted: coinDetail,
    swr: { isLoading, error },
  } = useCoinDetail(id as string);
  const shouldRender = {
    main: !!coinDetail && !isLoading && !error,
    isLoading: isLoading && !error,
    error: error,
  };

  return (
    <View style={styles.container}>
      {shouldRender.main && coinDetail && (
        <FadeIn>
          <CoinDetail {...coinDetail} />
        </FadeIn>
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
