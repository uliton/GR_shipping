import { AnyAction, createStore } from "redux";

const defaultState = {
  calculatorItems: {
    engine: '',
    auction: '',
    lot_year: '',
    lot_cost: '',
    lot_engine_volume: '',
    delivery_caterory: '',
    auction_country: '',
    auction_state: '',
    auction_city: '',
    delivery_country: '',
    insurance: '',
  }
}

enum ACTION_TYPES {
  SET_ENGINE = 'SET_ENGINE',
  SET_AUCTION = 'SET_AUCTION',
  SET_LOT_YEAR = 'SET_LOT_YEAR',
  SET_LOT_COST = 'SET_LOT_COST',
  SET_LOT_ENGINE_VOLUME = 'SET_LOT_ENGINE_VOLUME',
  SET_DELIVERY_CATEGORY = 'SET_DELIVERY_CATEGORY',
  SET_AUCTION_COUNTRY = 'SET_AUCTION_COUNTRY',
  SET_AUCTION_STATE = 'SET_AUCTION_STATE',
  SET_AUCTION_CITY = 'SET_AUCTION_CITY',
  SET_DELIVERY_COUNTRY = 'SET_DELIVERY_COUNTRY',
  SET_INSURANCE = 'SET_INSURANCE',
}

export const actions = {
  set_engine: (value: string) => ({ type: ACTION_TYPES.SET_ENGINE, payload: value}),
  set_auction: (value: string) => ({ type: ACTION_TYPES.SET_AUCTION, payload: value}),
  set_lot_year: (value: string) => ({ type: ACTION_TYPES.SET_LOT_YEAR, payload: value}),
  set_lot_cost: (value: string) => ({ type: ACTION_TYPES.SET_LOT_COST, payload: value}),
  set_lot_engine_volume: (value: string) => ({ type: ACTION_TYPES.SET_LOT_ENGINE_VOLUME, payload: value}),
  set_delivery_caterory: (value: string) => ({ type: ACTION_TYPES.SET_DELIVERY_CATEGORY, payload: value}),
  set_auction_country: (value: string) => ({ type: ACTION_TYPES.SET_AUCTION_COUNTRY, payload: value}),
  set_auction_state: (value: string) => ({ type: ACTION_TYPES.SET_AUCTION_STATE, payload: value}),
  set_auction_city: (value: string) => ({ type: ACTION_TYPES.SET_AUCTION_CITY, payload: value}),
  set_delivery_country: (value: string) => ({ type: ACTION_TYPES.SET_DELIVERY_COUNTRY, payload: value}),
  set_insurance: (value: string) => ({ type: ACTION_TYPES.SET_INSURANCE, payload: value}),
}

const reducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ENGINE:
      return {...state, engine: action.payload}
    
    case ACTION_TYPES.SET_AUCTION:
      return {...state, auction: action.payload}
    
    case ACTION_TYPES.SET_LOT_YEAR:
      return {...state, lot_year: action.payload}

    case ACTION_TYPES.SET_LOT_COST:
      return {...state, lot_cost: action.payload}

    case ACTION_TYPES.SET_LOT_ENGINE_VOLUME:
      return {...state, lot_engine_volume: action.payload}

    case ACTION_TYPES.SET_DELIVERY_CATEGORY:
      return {...state, delivery_caterory: action.payload}

    case ACTION_TYPES.SET_AUCTION_COUNTRY:
      return {...state, auction_country: action.payload}

    case ACTION_TYPES.SET_AUCTION_STATE:
      return {...state, auction_state: action.payload}

    case ACTION_TYPES.SET_AUCTION_CITY:
      return {...state, auction_city: action.payload}

    case ACTION_TYPES.SET_DELIVERY_COUNTRY:
      return {...state, delivery_country: action.payload}

    case ACTION_TYPES.SET_INSURANCE:
      return {...state, insurance: action.payload}

    default:
      return state;
  }
}

export const store = createStore(reducer);