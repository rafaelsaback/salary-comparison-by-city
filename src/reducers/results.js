import {SHOW_RESULTS} from '../actions';

function resultsReducer(state = {}, action) {
  switch(action.type) {
    case SHOW_RESULTS: {
      return Object.assign({}, state, {
        showResults: true,
      });
    }
    default: return state;
  }
}

export default resultsReducer;
