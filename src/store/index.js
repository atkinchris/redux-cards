import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import registerSubscribers from './subscribers'
import { buildDeck, fillHand } from './actions'

const buildStore = () => {
  const middleware = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
  const store = createStore(rootReducer(), middleware)

  registerSubscribers(store)

  store.dispatch(buildDeck())
  store.dispatch(fillHand())

  return store
}

export default buildStore
