import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "../reducers";
import thunk from "redux-thunk";

export const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
