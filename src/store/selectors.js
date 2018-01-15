const selectCard = (state, id) => state.cards[id]
const selectCards = state => Object.values(state.cards)
const selectDeck = state => state.stacks.deck
const selectHand = state => state.stacks.hand

export {
  selectCard,
  selectCards,
  selectDeck,
  selectHand,
}
