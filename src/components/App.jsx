import React from 'react'

import Player from './Player'
import Cards from './Cards'
import Debug from './Debug'
import Deck from './Deck'

const App = () => (
  <div className="site-wrap">
    <Player />
    <Deck />
    <Debug />
    <Cards />
  </div>
)

export default App
