import {UPDATE_EXCHANGE_RATES} from '../constants/actionTypes';

function exchangeRatesReducer(state, action) {
  switch(action.type) {
    case UPDATE_EXCHANGE_RATES: {
      return 1.1;
    }
    default: return state;
  }
}

export default exchangeRatesReducer;
