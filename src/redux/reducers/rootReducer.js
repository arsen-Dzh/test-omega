import { cardsReducer } from "./cardsReducer";
import { notificationReducer } from "./notificationReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cardsReducer,
  notificationReducer
})
