const selectCards = state => Object.values(state.cards)
const selectDeck = state => state.deck

export {
  selectCards,
  selectDeck,
}
