import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './store'
import App from './components/App'

import './index.css'

const mountElement = document.getElementById('root')
const store = createStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountElement,
)
