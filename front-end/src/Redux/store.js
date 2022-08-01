import { legacy_createStore, combineReducers } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import ProReducer from "./products/reducer";
//import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({ productData: ProReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
