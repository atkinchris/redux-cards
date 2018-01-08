import shortid from 'shortid'

const addCard = id => ({
  type: 'add_card',
  payload: {
    id: id || shortid.generate(),
  },
})

const addCardToDeck = id => ({
  type: 'add_card_to_deck',
  payload: id,
})

const addCardAndInsert = () => (dispatch) => {
  const id = shortid.generate()

  dispatch(addCard(id))
  dispatch(addCardToDeck(id))
}

export {
  addCard,
  addCardToDeck,
  addCardAndInsert,
}
