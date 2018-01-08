const selectCard = (state, id) => state.cards[id]
const selectCards = state => Object.values(state.cards)
const selectDeck = state => state.deck
const selectTopCards = (state, n) => selectDeck(state).slice(0, n).map(id => selectCard(state, id))

export {
  selectCard,
  selectCards,
  selectDeck,
  selectTopCards,
}
