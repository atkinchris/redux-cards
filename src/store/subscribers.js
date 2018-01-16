import observeStore from './utils/observeStore'
import { selectStacks } from './selectors'
import { drawCard } from './actions'

const subscribers = (store) => {
  observeStore(store, selectStacks, ({ hand, deck }) => {
    if (deck.length > 0 && hand.length < 3) {
      store.dispatch(drawCard())
    }
  })
}

export default subscribers
