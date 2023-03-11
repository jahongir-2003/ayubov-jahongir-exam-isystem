import {combineReducers} from "redux";
import {entertainmetReducer} from "./entertainmetReducer";

export const rootReducer = combineReducers({
    entertainment: entertainmetReducer
});

