/*
 * Action types
 */

export const SET_SRC_COUNTRY = 'SET_SRC_COUNTRY';
export const SET_TGT_COUNTRY = 'SET_TGT_COUNTRY';
export const SET_SRC_SALARY = 'SET_SRC_SALARY';
export const UPDATE_EXCHANGE_RATE = 'UPDATE_EXCHANGE_RATE';

/*
 * Action creators
 */

export function setSrcCountry(value) {
  return {type: SET_SRC_COUNTRY, value}
}

export function setTgtCountry(value) {
  return {type: SET_TGT_COUNTRY, value}
}

export function setSrcSalary(value) {
  return {type: SET_SRC_SALARY, value}
}

export function updateExchangeRate(srcCountry, tgtCountry) {
  return {type: UPDATE_EXCHANGE_RATE, srcCountry, tgtCountry}
}
