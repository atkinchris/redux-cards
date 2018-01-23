import { bindActionCreators } from 'redux'

import { ADD_CARD, MOVE_CARD, UPDATE_CARD, UPDATE_PLAYER, SHUFFLE_STACK } from '../types'
import { selectDeck, selectHand, selectCard, selectPlayer } from '../selectors'
import runBehaviours from '../behaviours'
import { MAX_HAND_SIZE } from '../constants'

const addCard = payload => ({ type: ADD_CARD, payload })
const moveCard = payload => ({ type: MOVE_CARD, payload })
const updateCard = payload => ({ type: UPDATE_CARD, payload })
const updatePlayer = payload => ({ type: UPDATE_PLAYER, payload })
const shuffleStack = payload => ({ type: SHUFFLE_STACK, payload })

const drawCard = () => (dispatch, getState) => {
  const state = getState()
  const deck = selectDeck(state)

  if (deck.length <= 0) {
    alert('Deck is empty!') // eslint-disable-line no-alert
    return
  }

  const id = deck[0]
  const action = moveCard({ card: { id }, destination: 'hand' })

  dispatch(action)
}

const fillHand = () => (dispatch, getState) => {
  const getHandSize = () => selectHand(getState()).length

  if (getHandSize() >= MAX_HAND_SIZE) {
    console.log('Could not draw cards - hand at max') // eslint-disable-line no-console
    return
  }

  while (getHandSize() < MAX_HAND_SIZE) {
    dispatch(drawCard())
  }
}

const playCard = ({ id }) => (dispatch, getState) => {
  const state = getState()
  const card = selectCard(state, id)
  const actions = bindActionCreators({
    addCard,
    moveCard,
    updateCard,
    updatePlayer,
  }, dispatch)
  const selectors = {
    getPlayer: () => selectPlayer(state),
  }

  runBehaviours(card, { ...actions, ...selectors })
}

export {
  addCard,
  moveCard,
  updateCard,
  updatePlayer,
  shuffleStack,
  drawCard,
  fillHand,
  playCard,
}

export * from './builders'
