import {SET_SRC_COUNTRY} from '../constants/actionTypes';

function srcCountryReducer(state, action) {
  switch(action.type) {
    case SET_SRC_COUNTRY: {
      return action.value;
    }
    default: return state;
  }
}

export default srcCountryReducer;
