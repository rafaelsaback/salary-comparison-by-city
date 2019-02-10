import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

import {
    FETCH_EXCHANGE_RATE,
    fetchExchangeRateSuccess,
    fetchExchangeRateFailure,
    calcSalary,
} from "../actions";

const baseUrl = 'http://free.currencyconverterapi.com/api/v5/convert?q=';
const urlSuffix = '&compact=y';

function fetchExchangeRateEpic(action$) {
    return action$
        .ofType(FETCH_EXCHANGE_RATE)
        .switchMap(() => {
            return ajax
                .getJSON(url + `${action.srcLocation.currency}_${action.tgtLocation.currency}` + urlSuffix).pipe(
                    map(response => calcSalary(response)
                        .map(data => data.results)
                    ))})

}

export const rootEpic = combineEpics(fetchExchangeRateEpic);
