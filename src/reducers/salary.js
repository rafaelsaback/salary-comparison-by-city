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
      const srcCurrency = action.srcLocation.currency;
      const tgtCurrency = action.tgtLocation.currency;
      const exchangeRate = getExchangeRate(srcCurrency, tgtCurrency);
      return Object.assign({}, state, {
        exchangeRate,
      });
    }
    case CALC_TGT_SALARY: {
      const srcCostIndex = action.srcLocation.costIndex;
      const tgtCostIndex = action.tgtLocation.costIndex;
      let tgtSalary = action.srcSalary * (tgtCostIndex / srcCostIndex);
      const tgtConvSalary = Math.round(tgtSalary * state.exchangeRate);
      tgtSalary = Math.round(tgtSalary);
      return Object.assign({}, state, {
        tgtSalary,
        tgtConvSalary,
      });
    }
    default: return state;
  }
}

function getExchangeRate(srcCurrency, tgtCurrency) {
  const request = new XMLHttpRequest();
  const url=`http://free.currencyconverterapi.com/api/v5/convert?q=${srcCurrency}_${tgtCurrency}&compact=y`;
  request.open("GET", url, false);
  request.send();
  const json = JSON.parse(request.responseText); 
  return (json[Object.keys(json)[0]].val);
}

export default salaryReducer;
