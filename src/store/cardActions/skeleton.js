import { removeCardFromDeck } from '../actions'

const skeletonAction = card => (dispatch) => {
  dispatch(removeCardFromDeck(card.id))
}

export default { skeleton: skeletonAction }
