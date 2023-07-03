// Store Code Here

import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";

import thunk from "redux-thunk";

import { postReducer } from "./Products/product.reducer";
import Sell_postReducer from "./Sell_Products/post.reducer";

const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  product: postReducer,
  post: Sell_postReducer,
});
export const store = legacy_createStore(
  rootReducer,
  composeInhancer(applyMiddleware(thunk))
);
