import { combineReducers, compose, createStore } from 'redux';

import petsReducer from './reducers/pets.reducer';




const rootReducer = combineReducers({
  pets: petsReducer,
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export type AppState = ReturnType<typeof rootReducer>;

export default configureStore;
