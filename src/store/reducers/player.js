import { UPDATE_PLAYER } from '../types'

const DEFAULT_STATE = {
  health: 20,
  attack: 1,
  damage: 0,
}

const playerReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_PLAYER:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default playerReducer
