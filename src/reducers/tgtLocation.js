import {SET_TGT_LOCATION} from '../actions';

function tgtLocationReducer(state = {}, action) {
  switch(action.type) {
    case SET_TGT_LOCATION: {
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

export default tgtLocationReducer;
