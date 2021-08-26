import { combineReducers } from "redux";
import { EditReducer } from "./editReducer";
import { EmployReducer } from "./employReducer";
export const combineReducer=combineReducers({EmployReducer,EditReducer});