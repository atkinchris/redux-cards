import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import registerSubscribers from './subscribers'

const buildStore = () => {
  const middleware = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
  const store = createStore(rootReducer(), middleware)

  registerSubscribers(store)

  return store
}

export default buildStore
