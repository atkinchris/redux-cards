import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './store'

const mountElement = document.getElementById('root')
const store = createStore()

const App = (
  <Provider store={store}>
    <h1>Hello world</h1>
  </Provider>
)

render(App, mountElement)
