// Adapters
import { adapterCoinDetail } from "../../adapters";
// Constants
import apiBackend from "../../constants/Api";
// Typees
import { CoinDetail } from "../../types";
// Libreries
import useSWR from "swr";

// Types
type FetcherFn<Data> = () => Promise<Data>;

/**
 * Hook fetch detail data with axios and swr sending request to backend api returning coin list of Coingecko API.
 * @param id for know the id for the request
 */
const useCoinDetail = (id: string | undefined) => {
  const fetcher: FetcherFn<CoinDetail> = async () => {
    const response = await apiBackend.get(`api/coins/${id}`);
    return response.data;
  };
  const swr = useSWR(id ? `api/detail/${id}` : null, fetcher);
  return {
    swr,
    adapted: adapterCoinDetail(swr.data),
  };
};

export default useCoinDetail;
