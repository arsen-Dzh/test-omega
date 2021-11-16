import { ADD_CARD, BUY_CARD, REMOVE_CARD } from "../actionTypes/cardsAT"

export const addCardAC = (payload) => {
  return {
    type: ADD_CARD,
    payload
  }
}

export const removeCardAC = (payload) => {
  return {
    type: REMOVE_CARD,
    payload
  }
}

export const buyCardAC = (payload) => {
  return {
    type: BUY_CARD,
    payload
  }
}


