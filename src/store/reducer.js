import { combineReducers } from "redux-immutable";
import { reducer as homeReducer } from "../pages/Home/store";
import { reducer as userReducer } from "../pages/Login/store";

export default combineReducers({
  home: homeReducer,
  user: userReducer
});
