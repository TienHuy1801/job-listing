import { combineReducers } from "redux";
import { jobReducer } from "./job";
import { searchReducer } from "./search";

export default combineReducers({
  job: jobReducer,
  search: searchReducer,
})