import {SET_SRC_LOCATION} from '../actions';

function srcLocationReducer(state = {}, action) {
  switch(action.type) {
    case SET_SRC_LOCATION: {
      return {
        city: action.city,
        currency: action.currency,
        costIndex: action.costIndex
      };
    }
    default: return state;
  }
}

export default srcLocationReducer;
