// Adapters
import { adapterCoinList } from "../../adapters";
// Constants
import apiBackend from "../../constants/Api";
// Typees
import { CoinList } from "../../types";
// Libreries
import useSWR from "swr";

// Types
type FetcherFn<Data> = () => Promise<Data>;

/**
 * Hook fetch data with axios and swr sending request to backend api returning coin list of Coingecko API.
 */
const useProductList = () => {
  const fetcher: FetcherFn<CoinList[]> = async () => {
    const response = await apiBackend.get("api/coins");
    return response.data;
  };
  const swr = useSWR(`api/search`, fetcher);
  return {
    swr: useSWR(`api/search`, fetcher),
    adapted: adapterCoinList(swr.data),
  };
};

export default useProductList;
