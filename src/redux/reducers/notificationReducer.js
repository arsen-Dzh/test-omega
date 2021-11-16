import { STATUS } from '../actionTypes/notificationReducerAT'

const initState = {
  status: false,
  message: '',
};

export const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case STATUS:
      return {...state, status: !state.status, message: action.payload}
    default:
      return state;
  }
}
