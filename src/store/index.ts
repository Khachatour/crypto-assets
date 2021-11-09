import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from './thunk';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware),
);

const store = createStore(rootReducer, enhancer);

export type AppDispatch = typeof store.dispatch
export type Store  = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export default store;