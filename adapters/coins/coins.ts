import {
  CoinDetail,
  CoinDetailAdapted,
  CoinList,
  CoinListAdapted,
} from "../../types";

const adaptVariation = (
  value: number
): {
  original: number;
  formatted: string;
  color: string;
  icon: "arrow-drop-down" | "arrow-drop-up";
} => {
  return {
    original: value,
    formatted: `${value?.toFixed(2).replace("-", "")}%`,
    color: value?.toString().startsWith("-") ? "#ea3943" : "#16c784",
    icon: value?.toString().startsWith("-")
      ? "arrow-drop-down"
      : "arrow-drop-up",
  };
};

const adaptPrice = (value: number): { original: number; formatted: string } => {
  return {
    original: value,
    formatted: value?.toFixed(2),
  };
};

const adaptMarketCap = (
  value: number
): { original: number; formatted: string } => {
  return {
    original: value,
    formatted: `${(value / 10000000000)?.toFixed(2)} Bn`,
  };
};

export const adapterCoinList = (
  coins: CoinList[] | undefined
): CoinListAdapted[] | undefined => {
  if (!coins) return undefined;
  return coins.map((coin) => ({
    id: coin.id,
    image: coin.image,
    symbol: coin.symbol.toUpperCase(),
    rank: coin.market_cap_rank,
    price: adaptPrice(coin.current_price),
    variation: adaptVariation(coin.market_cap_change_percentage_24h),
    market_cap: adaptMarketCap(coin.market_cap),
  }));
};

export const adapterCoinDetail = (
  coin: CoinDetail | undefined
): CoinDetailAdapted | undefined => {
  if (!coin) return undefined;
  return {
    id: coin.id,
    image: coin.image?.large || coin.image?.small || coin.image?.thumb,
    name: coin.name,
    symbol: coin.symbol.toUpperCase(),
    rank: coin.market_data.market_cap_rank,
    description: coin?.description?.en,
    price: adaptPrice(coin.market_data.current_price.usd),
    market_cap: adaptMarketCap(coin.market_data.market_cap.usd),
    variation_24h: adaptVariation(coin.market_data.price_change_percentage_24h),
    variation_7d: adaptVariation(coin.market_data.price_change_percentage_7d),
    variation_30d: adaptVariation(coin.market_data.price_change_percentage_30d),
    variation_1y: adaptVariation(coin.market_data.price_change_percentage_1y),
  };
};
