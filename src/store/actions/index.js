import { ADD_CARD, MOVE_CARD, UPDATE_CARD, UPDATE_PLAYER } from '../types'
import { selectDeck } from '../selectors'

const addCard = payload => ({ type: ADD_CARD, payload })
const moveCard = payload => ({ type: MOVE_CARD, payload })
const updateCard = payload => ({ type: UPDATE_CARD, payload })
const updatePlayer = payload => ({ type: UPDATE_PLAYER, payload })

const drawCard = () => (dispatch, getState) => {
  const state = getState()
  const deck = selectDeck(state)
  const id = deck[0]
  const action = moveCard({ card: { id }, destination: 'hand' })

  dispatch(action)
}

export {
  addCard,
  moveCard,
  updateCard,
  updatePlayer,
  drawCard,
}

export * from './builders'
