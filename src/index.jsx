import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './store'
import Cards from './components/Cards'
import Debug from './components/Debug'

const mountElement = document.getElementById('root')
const store = createStore()

const App = (
  <Provider store={store}>
    <div>
      <Cards />
      <Debug />
    </div>
  </Provider>
)

render(App, mountElement)
