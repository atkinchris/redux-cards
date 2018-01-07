import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addCard as addCardAction } from '../store/actions'

const Debug = ({ addCard }) => (
  <div>
    <button onClick={addCard}>Add Card</button>
  </div>
)

Debug.propTypes = {
  addCard: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  addCard: addCardAction,
}

export default connect(null, mapDispatchToProps)(Debug)
