import { ADD_CARD, UPDATE_CARD } from '../types'

const DEFAULT_STATE = {}

const cardsReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload = {} } = action
  const { id } = payload

  if (!id) {
    return state
  }

  switch (type) {
    case ADD_CARD:
      return {
        ...state,
        [id]: payload,
      }
    case UPDATE_CARD:
      return {
        ...state,
        [id]: {
          ...state[id],
          ...payload,
        },
      }
    default:
      return state
  }
}

export default cardsReducer
