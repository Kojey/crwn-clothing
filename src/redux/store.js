import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from './root-reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

const middlewares = [logger];

// const store = createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares)));
const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;