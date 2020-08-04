import { combineReducers } from "redux";

import { Counter } from "./counter";
import { Auth } from "./auth";

export default combineReducers({
  counter: Counter,
  auth: Auth,
});
