import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articlesReducer from "./articlesReducer";
const rootReducer = combineReducers({
  user: userReducer,
  articles:articlesReducer
});

export default rootReducer;