import observeStore from './utils/observeStore'
import { selectStacks, selectPlayer } from './selectors'
import { drawCard } from './actions'

const subscribers = (store) => {
  observeStore(store, selectStacks, ({ hand, deck }) => {
    if (deck.length > 0 && hand.length < 3) {
      store.dispatch(drawCard())
    }
  })

  observeStore(store, selectPlayer, ({ health, damage }) => {
    if (health - damage <= 0) {
      alert('You died.') // eslint-disable-line no-alert
    }
  })
}

export default subscribers
