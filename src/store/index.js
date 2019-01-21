import {createStore} from 'redux';
import salaryComparisonApp from '../reducers';

const store = createStore(
  salaryComparisonApp
);

export default store;
