import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addCardAndInsert } from '../store/actions'

const Debug = ({ addCard }) => (
  <div>
    <button onClick={addCard}>Add Card</button>
  </div>
)

Debug.propTypes = {
  addCard: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  addCard: addCardAndInsert,
}

export default connect(null, mapDispatchToProps)(Debug)
