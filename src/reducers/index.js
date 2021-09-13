import { combineReducers } from "redux";
import loginReducer from "./reducerLogin";
import registerReducer from "./reducerRegister";

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
});

export default rootReducer;