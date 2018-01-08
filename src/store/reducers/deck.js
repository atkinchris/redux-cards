const deckReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case 'add_card_to_deck':
      return [
        ...state,
        payload,
      ]
    case 'remove_card_from_deck':
      return state.filter(id => id !== payload)
    default:
      return state
  }
}

export default deckReducer
