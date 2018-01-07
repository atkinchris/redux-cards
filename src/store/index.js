import { createStore, compose } from 'redux'

import rootReducer from './reducers'

const buildStore = () => {
  const middleware = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
  const store = createStore(rootReducer(), middleware)

  return store
}

export default buildStore
