/*
 * Action types
 */

export const SET_SRC_LOCATION = 'SET_SRC_LOCATION';
export const SET_TGT_LOCATION = 'SET_TGT_LOCATION';
export const SET_SRC_SALARY = 'SET_SRC_SALARY';
export const FETCH_EXCHANGE_RATE = 'UPDATE_EXCHANGE_RATE';
export const FETCH_EXCHANGE_RATE_SUCCESS = 'UPDATE_EXCHANGE_RATE_SUCCESS';
export const FETCH_EXCHANGE_RATE_FAILURE = 'UPDATE_EXCHANGE_RATE_FAILURE';
export const CALC_TGT_SALARY = 'CALC_TGT_SALARY';
export const SHOW_RESULTS = 'SHOW_RESULTS';

/*
 * Action creators
 */

export function setSrcLocation(city) {
  return {type: SET_SRC_LOCATION, city}
}

export function setTgtLocation(city) {
  return {type: SET_TGT_LOCATION, city}
}

export function setSrcSalary(value) {
  return {type: SET_SRC_SALARY, value}
}

export function fetchExchangeRate() {
    return {type: FETCH_EXCHANGE_RATE}
};

export const fetchExchangeRateSuccess = (exchangeRate) => ({
    type: FETCH_EXCHANGE_RATE_SUCCESS,
    payload: exchangeRate,
});

export const fetchExchangeRateFailure = (message) => ({
    type: FETCH_EXCHANGE_RATE_FAILURE,
    payload: message,
});

export function calcTgtSalary(exchangeRate) {
  return {type: CALC_TGT_SALARY, exchangeRate}
}

export function showResults() {
  return {type: SHOW_RESULTS}
}
