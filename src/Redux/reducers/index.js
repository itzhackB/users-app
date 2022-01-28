import { combineReducers } from "redux";
import usersReducers from "./usersReducers";
import errReducer from "./errReducer";

export default combineReducers({
    users: usersReducers,
    err:errReducer
})