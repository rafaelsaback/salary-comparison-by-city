/*
 * Action types
 */

export const SET_SRC_LOCATION = 'SET_SRC_LOCATION';
export const SET_TGT_LOCATION = 'SET_TGT_LOCATION';
export const SET_SRC_SALARY = 'SET_SRC_SALARY';
export const UPDATE_EXCHANGE_RATE = 'UPDATE_EXCHANGE_RATE';
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

export function updateExchangeRate() {
  return {type: UPDATE_EXCHANGE_RATE}
}

export function calcTgtSalary(srcSalary) {
  return {type: CALC_TGT_SALARY, srcSalary}
}

export function showResults() {
  return {type: SHOW_RESULTS}
}
