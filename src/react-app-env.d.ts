/// <reference types="react-scripts" />

interface EngineConfig {
  petrol: string,
  disel: string,
  hybrid: string,
  electro: string,
}

interface AuctionConfig {
  copart: string,
  manheim: string,
  aiia: string,
}

interface CategoryConfig {
  first: string,
  second: string,
  third: string,
}

interface MapConfig {
  usa: string,
  canada: string,
  german: string,
  poland: string,
}

interface LanguageConfig {
  polish: string,
  ukrainian: string,
}

interface CalculatorItems {
  engine: string,
  auction: string,
  lot_year: string,
  lot_cost: string,
  lot_engine_volume: string,
  delivery_caterory: string,
  auction_country: string,
  auction_state: string,
  auction_city: string,
  delivery_country: string,
  insurance: string,
}

interface Store {
  calculatorItems: CalculatorItems,
}