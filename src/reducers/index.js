import {combineReducers} from 'redux';
import srcLocationReducer from './srcLocation';
import tgtLocationReducer from './tgtLocation';
import salaryReducer from './salary';
import citiesReducer from './cities';

const salaryComparisonApp = combineReducers({
  srcLocation: srcLocationReducer,
  tgtLocation: tgtLocationReducer,
  salary: salaryReducer,
  cities: citiesReducer,
});

export default salaryComparisonApp;
