import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

export const rootReducer = combineReducers({
    form : UserReducer,
})