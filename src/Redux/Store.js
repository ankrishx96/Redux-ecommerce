import { createStore } from "redux";
import { CombineReducers } from "./CombineReducers";

export const Store = createStore(CombineReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
