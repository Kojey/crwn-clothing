import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

const middlewares = [];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger)
}

// const store = createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares)));
export const store = createStore(rootReducer,applyMiddleware(...middlewares));
export const persistor = persistStore(store)

// export default {store, persistor};