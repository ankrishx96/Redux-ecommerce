import { combineReducers } from "redux";
import { commonReducer } from "./reducers/commonReducer";

export const CombineReducers = combineReducers({
  prod : commonReducer
});
