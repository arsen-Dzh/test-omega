import { STATUS } from "../actionTypes/notificationReducerAT";

export const notificationAC = (payload) => {
  return {
    type: STATUS,
    payload
  }
}
