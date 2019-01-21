/*
 * Action types
 */

export const SET_SRC_LOCATION = 'SET_SRC_LOCATION';
export const SET_TGT_LOCATION = 'SET_TGT_LOCATION';
export const SET_SRC_SALARY = 'SET_SRC_SALARY';
export const UPDATE_EXCHANGE_RATE = 'UPDATE_EXCHANGE_RATE';
export const CALC_TGT_SALARY = 'CALC_TGT_SALARY';

/*
 * Action creators
 */

export function setSrcLocation(city, currency, costIndex) {
  return {type: SET_SRC_LOCATION, city, currency, costIndex}
}

export function setTgtLocation(city, currency, costIndex) {
  return {type: SET_TGT_LOCATION, city, currency, costIndex}
}

export function setSrcSalary(value) {
  return {type: SET_SRC_SALARY, value}
}

export function updateExchangeRate(srcCurrency, tgtCurrency) {
  return {type: UPDATE_EXCHANGE_RATE, srcCurrency, tgtCurrency}
}

export function calcTgtSalary(value) {
  return {type: CALC_TGT_SALARY, payload}
}
