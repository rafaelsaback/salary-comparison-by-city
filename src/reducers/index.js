import {combineReducers} from 'redux';
import srcLocationReducer from './srcLocation';
import tgtLocationReducer from './tgtLocation';
import exchangeRateReducer from './salary';
import salaryReducer from './salary';
import citiesReducer from './cities';
import resultsReducer from './results';
import cities from '../../extras/parsedData.json';

const initialState = {
    cities,
    isLoading: false,
    error: false,
};
const rootReducer = (state = initialState, action) => {
  const citiesInfo = state.cities.map(city => { return {
    city: city.cityCountry,
    currencyCode: city.currencyCode,
    costIndex: city.costIndex,
  }});
  const srcLocation = state.srcLocation;
  const tgtLocation = state.tgtLocation;

    return {
        srcLocation: srcLocationReducer(state.srcLocation, {...action, citiesInfo}),
        tgtLocation: tgtLocationReducer(state.tgtLocation, {...action, citiesInfo}),
        exchangeRate: exchangeRateReducer(state.exchangeRate, {...action, srcLocation, tgtLocation}),
        salary: salaryReducer(state.salary, {...action, srcLocation, tgtLocation}),
        cities: citiesReducer(state.cities, action),
        showResults: resultsReducer(state.showResults, action),
    }
};

export default rootReducer;
