import authReducer from "./auth.js";
import responseReducer from "./response.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userAuth: authReducer,
  response: responseReducer,
});

export default rootReducer;
