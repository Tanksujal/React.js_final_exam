import { applyMiddleware, createStore } from "redux";

import { thunk } from "redux-thunk";
import { rootReducer } from "./Redux/reducers";


export const store = createStore(rootReducer,applyMiddleware(thunk))