import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducer';


// const myMiddleware = (action, next, store) => {
//   if(typeof action === "function") {
//     function(store.dispatch)
//   } else {
//     next(action)
//   }
// }

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);