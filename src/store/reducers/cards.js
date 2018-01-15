import { ADD_CARD, UPDATE_CARD } from '../types'

const DEFAULT_STATE = {}

const cardsReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  if (!payload || !payload.id) {
    return state
  }

  switch (type) {
    case ADD_CARD:
    case UPDATE_CARD:
      return {
        ...state,
        [payload.id]: payload,
      }
    default:
      return state
  }
}

export default cardsReducer
