import { combineReducers } from 'redux'

import cards from './cards'
import deck from './deck'

const rootReducer = () => combineReducers({
  cards,
  deck,
})

export default rootReducer
