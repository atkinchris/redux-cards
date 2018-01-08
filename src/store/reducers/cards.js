const cardsReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case 'add_card':
      return {
        ...state,
        [payload.id]: payload,
      }
    default:
      return state
  }
}

export default cardsReducer
