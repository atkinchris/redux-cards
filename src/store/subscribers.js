import observeStore from './utils/observeStore'
import { selectPlayer } from './selectors'

const subscribers = (store) => {
  observeStore(store, selectPlayer, ({ health, damage }) => {
    if (health - damage <= 0) {
      alert('You died.') // eslint-disable-line no-alert
    }
  })
}

export default subscribers
