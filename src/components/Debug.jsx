import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../store/actions'

const Debug = ({ addCreature, addItem }) => (
  <div className="c-debug-panel">
    <button onClick={addCreature}>Add Creature</button>
    <button onClick={addItem}>Add Item</button>
  </div>
)

Debug.propTypes = {
  addCreature: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
}

export default connect(null, actions)(Debug)
