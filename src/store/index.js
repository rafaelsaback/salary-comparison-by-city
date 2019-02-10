import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import salaryComparisonApp from '../reducers';
import { rootEpic } from '../epics';

const observableMiddleware = createEpicMiddleware();

const store = createStore(
    salaryComparisonApp,
    applyMiddleware(observableMiddleware),
);

observableMiddleware.run(rootEpic);

export default store;
