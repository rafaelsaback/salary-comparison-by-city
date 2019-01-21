import {SET_TGT_LOCATION} from '../actions';

function tgtLocationReducer(state = {}, action) {
  switch(action.type) {
    case SET_TGT_LOCATION: {
      return {
        city: action.city,
        currency: action.currency,
        costIndex: action.costIndex
      };
    }
    default: return state;
  }
}

export default tgtLocationReducer;
