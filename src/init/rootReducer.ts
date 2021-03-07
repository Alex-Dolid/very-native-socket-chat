// Core
import { combineReducers } from "redux";
// Reducers
// import { chatReducer as chat } from "../bus/chat";

export const rootReducer = combineReducers({ });

export type AppState = ReturnType<typeof rootReducer>;
