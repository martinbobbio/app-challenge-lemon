import { CoinList, CoinListAdapted } from "../../types";

export const adapterCoinList = (
  coins: CoinList[] | undefined
): CoinListAdapted[] | undefined => {
  if (!coins) return undefined;
  return coins.map((coin) => ({
    id: coin.id,
    image: coin.image,
    symbol: coin.symbol.toUpperCase(),
    rank: coin.market_cap_rank,
    price: {
      original: coin.current_price,
      formatted: coin.current_price.toFixed(2),
    },
    variation: {
      original: coin.market_cap_change_percentage_24h,
      formatted: `${coin.market_cap_change_percentage_24h.toFixed(2)}%`,
      isPositive: coin.market_cap_change_percentage_24h
        .toString()
        .startsWith("-")
        ? true
        : false,
    },
    market_cap: {
      original: coin.market_cap,
      formatted: `${(coin?.market_cap / 10000000000).toFixed(2)} Bn`,
    },
  }));
};
