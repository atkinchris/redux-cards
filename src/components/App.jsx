import React from 'react'

import Cards from './Cards'
import InfoPanel from './InfoPanel'
import Debug from './Debug'

const App = () => (
  <div className="site-wrap flex flex--column">
    <Cards />
    <InfoPanel />
    <Debug />
  </div>
)

export default App
