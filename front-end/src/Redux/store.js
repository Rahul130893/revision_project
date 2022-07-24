import { legacy_createStore, combineReducers } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import ProReducer from "./products.js/reducer";

const Reducer = combineReducers({ productData: ProReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  Reducer,
  composeEnhancers(applyMiddleware(thunk))
);
