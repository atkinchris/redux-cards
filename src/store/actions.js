import shortid from 'shortid'

import { selectCard } from './selectors'
import cardActions from './cardActions'

const addCard = card => ({
  type: 'add_card',
  payload: card,
})

const addCardToDeck = id => ({
  type: 'add_card_to_deck',
  payload: id,
})

const removeCardFromDeck = id => ({
  type: 'remove_card_from_deck',
  payload: id,
})

const addCardAndInsert = () => (dispatch) => {
  const id = shortid.generate()

  dispatch(addCard({ id, type: 'skeleton' }))
  dispatch(addCardToDeck(id))
}

const chooseCard = id => (dispatch, getState) => {
  const state = getState()
  const card = selectCard(state, id)
  const { type } = card
  const action = cardActions[type]

  dispatch(action(card))
}

export {
  addCard,
  addCardToDeck,
  removeCardFromDeck,
  addCardAndInsert,
  chooseCard,
}
