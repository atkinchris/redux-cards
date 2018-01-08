import shortid from 'shortid'

const addCard = card => ({
  type: 'add_card',
  payload: card,
})

const addCardToDeck = id => ({
  type: 'add_card_to_deck',
  payload: id,
})

const addCardAndInsert = () => (dispatch) => {
  const id = shortid.generate()

  dispatch(addCard({ id, type: 'skeleton' }))
  dispatch(addCardToDeck(id))
}

export {
  addCard,
  addCardToDeck,
  addCardAndInsert,
}
