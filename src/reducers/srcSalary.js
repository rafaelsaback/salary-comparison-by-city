import {SET_SRC_SALARY} from '../constants/actionTypes';

function srcSalaryReducer(state, action) {
  switch(action.type) {
    case SET_SRC_SALARY: {
      return action.value;
    }
    default: return state;
  }
}

export default srcSalaryReducer;
