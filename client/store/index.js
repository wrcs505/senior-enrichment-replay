import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form'
/* combineReducers is not currently used, but eventually should be for modular code :D */

import allAircraft from './aircraft';
import allCountries from './countries';
import topFive from './topFive';
import selectCountry from './newCountryEntry';

const reducer = combineReducers({
  allAircraft,
  allCountries,
  topFive,
  selectCountry,
  form: formReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;

export * from './aircraft';
export * from './countries';
export * from './topFive';
export * from './newCountryEntry';
