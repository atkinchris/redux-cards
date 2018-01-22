import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../store/actions'

const Debug = ({ addCreature, addPotion, drawCard }) => (
  <div className="c-debug-panel">
    <button className="c-debug-button" onClick={addCreature}>Add Creature</button>
    <button className="c-debug-button" onClick={addPotion}>Add Potion</button>
    <button className="c-debug-button" onClick={drawCard}>Draw Card</button>
  </div>
)

Debug.propTypes = {
  addCreature: PropTypes.func.isRequired,
  addPotion: PropTypes.func.isRequired,
  drawCard: PropTypes.func.isRequired,
}

export default connect(null, actions)(Debug)
