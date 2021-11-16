import { v4 as uuidv4 } from 'uuid';
import { ADD_CARD, BUY_CARD, REMOVE_CARD } from '../actionTypes/cardsAT'

const initState = {
  cards: [
    {id: uuidv4(), name: 'Наушники', price: 100, status: false},
    {id: uuidv4(), name: 'Телефон', price: 500, status: false},
    {id: uuidv4(), name: 'Телевизор', price: 600, status: false},
  ]
}

export const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {...state, cards:[...state.cards, action.payload]}
    case REMOVE_CARD:
      return {...state, cards: state.cards.filter(card => card.id !== action.payload)}
    case BUY_CARD:
      return {...state, cards: state.cards.map(card => {
        if (card.id === action.payload) {
          return {...card, status: !card.status}
        }
        return card
      })}
    default:
      return state
  }
}
