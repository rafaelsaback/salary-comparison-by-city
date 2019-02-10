import {
    FETCH_EXCHANGE_RATE,
    FETCH_EXCHANGE_RATE_SUCCESS,
    FETCH_EXCHANGE_RATE_FAILURE,
} from '../actions';

const initialState = {
    exchangeRate: null,
    isLoading: false,
    error: null
};

export default function exchangeRateReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EXCHANGE_RATE:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_EXCHANGE_RATE_SUCCESS:
            return {
                exchangeRate: [...action.payload],
                isLoading: false,
                error: null
            };
        case FETCH_EXCHANGE_RATE_FAILURE:
            return {
                exchangeRate: null,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
