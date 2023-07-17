export interface CoinList {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null | unknown;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

export interface CoinListAdapted {
  id: string;
  image: string;
  symbol: string;
  rank: number;
  price: {
    original: number;
    formatted: string;
  };
  variation: {
    original: number;
    formatted: string;
    isPositive: boolean;
  };
  market_cap: {
    original: number;
    formatted: string;
  };
}
