import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ id, type }) => (
  <button className="c-card">
    { `${type} (${id})` }
  </button>
)

Card.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Card
