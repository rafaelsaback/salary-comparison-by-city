import {SET_TGT_COUNTRY} from '../constants/actionTypes';

function tgtCountryReducer(state, action) {
  switch(action.type) {
    case SET_TGT_COUNTRY: {
      return action.value;
    }
    default: return state;
  }
}

export default tgtCountryReducer;
