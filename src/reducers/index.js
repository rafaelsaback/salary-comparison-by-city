import {combineReducers} from 'redux';
import srcCountryReducer from './srcCountry';
import tgtCountryReducer from './tgtCountry';
import srcSalaryReducer from './srcSalary';
import exchangeRatesReducer from './exchangeRates';

const rootReducer = combineReducers({
  srcCountryState: srcCountryReducer,
  tgtCountryState: tgtCountryReducer,
  srcSalaryState: srcSalaryReducer,
  exchangeRatesState: exchangeRatesReducer,
});
