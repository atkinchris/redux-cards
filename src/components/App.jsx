import React from 'react'

import Cards from './Cards'
import Info from './Info'
import Debug from './Debug'

const App = () => (
  <div className="site-wrap flex flex--column">
    <Cards />
    <Info />
    <Debug />
  </div>
)

export default App
