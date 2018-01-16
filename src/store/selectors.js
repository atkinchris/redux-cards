const selectCard = (state, id) => state.cards[id]
const selectCards = (state, ids) => ids.map(id => selectCard(state, id))
const selectStacks = state => state.stacks
const selectDeck = state => selectStacks(state).deck
const selectHand = state => selectStacks(state).hand
const selectPlayer = state => state.player

export {
  selectCard,
  selectCards,
  selectStacks,
  selectDeck,
  selectHand,
  selectPlayer,
}
