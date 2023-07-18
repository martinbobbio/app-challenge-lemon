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
const useCoins = (
  shouldFetch: boolean,
  config?: { ids?: string; search?: string }
) => {
  const fetcher: FetcherFn<CoinList[]> = async () => {
    const response = await apiBackend.get(`api/coins`, {
      params: {
        ids: config?.ids,
        search: config?.search,
      },
    });
    return response.data;
  };
  const swr = useSWR(
    shouldFetch ? `api/list/${config?.ids || config?.search}` : null,
    fetcher
  );
  return {
    swr,
    adapted: adapterCoinList(swr.data),
  };
};

export default useCoins;
