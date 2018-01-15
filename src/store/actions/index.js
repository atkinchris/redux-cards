import { ADD_CARD, MOVE_CARD, UPDATE_CARD, UPDATE_PLAYER } from '../types'

const addCard = payload => ({ type: ADD_CARD, payload })
const moveCard = payload => ({ type: MOVE_CARD, payload })
const updateCard = payload => ({ type: UPDATE_CARD, payload })
const updatePlayer = payload => ({ type: UPDATE_PLAYER, payload })

export {
  addCard,
  moveCard,
  updateCard,
  updatePlayer,
}

export * from './builders'
