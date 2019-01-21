import {SET_SRC_SALARY} from '../actions';
import {UPDATE_EXCHANGE_RATE} from '../actions';
import {CALC_TGT_SALARY} from '../actions';

function salaryReducer(state = {}, action) {
  switch(action.type) {
    case SET_SRC_SALARY: {
      return Object.assign({}, state, {
        srcSalary: action.value
      });
    }
    case UPDATE_EXCHANGE_RATE: {
      return Object.assign({}, state, {
        exchangeRate: 1.5 //TODO - Right now it's a dummy value;
      });
    }
    case CALC_TGT_SALARY: {
      return Object.assign({}, state, {
        tgtSalary: 2.5 //TODO - Right now it's a dummy value;
      });
    }
    default: return state;
  }
}

export default salaryReducer;
