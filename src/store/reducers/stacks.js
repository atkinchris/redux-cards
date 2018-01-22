import { ADD_CARD, MOVE_CARD, SHUFFLE_STACK } from '../types'
import shuffle from '../utils/shuffle'

const DEFAULT_STATE = {
  deck: [],
  discard: [],
  hand: [],
}

const stacksReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action
  const { deck, discard, hand } = state

  switch (type) {
    case ADD_CARD:
      return {
        ...state,
        deck: [...deck, payload.id],
      }
    case MOVE_CARD: {
      const { card, destination } = payload
      const newStacks = {
        deck: deck.filter(id => id !== card.id),
        discard: discard.filter(id => id !== card.id),
        hand: hand.filter(id => id !== card.id),
      }

      newStacks[destination].push(card.id)

      return newStacks
    }
    case SHUFFLE_STACK: {
      const { stack } = payload

      return {
        ...state,
        [stack]: shuffle(state[stack]),
      }
    }
    default:
      return state
  }
}

export default stacksReducer
