interface CurrenciesTickers {
  ars: number;
  btc: number;
  usd: number;
}

interface VariationsAdapted {
  original: number;
  formatted: string;
  color: string;
  icon: "arrow-drop-down" | "arrow-drop-up";
}

interface AmountAdapted {
  original: number;
  formatted: string;
}

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
  price: AmountAdapted;
  variation: VariationsAdapted;
  market_cap: AmountAdapted;
}

export interface CoinDetail {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  description: {
    en: string;
    es: string;
  };
  market_data: {
    ath: CurrenciesTickers;
    atl: CurrenciesTickers;
    market_cap: CurrenciesTickers;
    total_volume: CurrenciesTickers;
    current_price: CurrenciesTickers;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    price_change_percentage_1y: number;
    market_cap_rank: number;
  };
}

export interface CoinDetailAdapted {
  id: string;
  image: string;
  symbol: string;
  name: string;
  rank: number;
  description: string;
  price: AmountAdapted;
  market_cap: AmountAdapted;
  variation_24h: VariationsAdapted;
  variation_7d: VariationsAdapted;
  variation_30d: VariationsAdapted;
  variation_1y: VariationsAdapted;
}
