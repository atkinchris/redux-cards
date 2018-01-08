import shortid from 'shortid'

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

const chooseCard = id => (dispatch) => {
  dispatch(removeCardFromDeck(id))
}

export {
  addCard,
  addCardToDeck,
  addCardAndInsert,
  chooseCard,
}
