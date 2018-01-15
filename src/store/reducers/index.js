import { combineReducers } from 'redux'

import cards from './cards'
import stacks from './stacks'
import player from './player'

const rootReducer = () => combineReducers({
  cards,
  stacks,
  player,
})

export default rootReducer
