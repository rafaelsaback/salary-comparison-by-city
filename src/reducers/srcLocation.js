import {SET_SRC_LOCATION} from '../actions';

function srcLocationReducer(state = {}, action) {
  switch(action.type) {
    case SET_SRC_LOCATION: {
      const cityInfo = action.citiesInfo.filter(
        city => city.city === action.city
      )[0];
      return Object.assign({}, state, {
        city: action.city,
        currency: cityInfo.currencyCode,
        costIndex: cityInfo.costIndex,
      });
    }
    default: return state;
  }
}

export default srcLocationReducer;
