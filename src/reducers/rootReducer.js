import { combineReducers } from "react-redux";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({ userState: userReducer });
