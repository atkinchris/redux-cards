const deckReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case 'add_card_to_deck':
      return [
        ...state,
        payload,
      ]
    default:
      return state
  }
}

export default deckReducer
