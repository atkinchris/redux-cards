import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ id, type, onClick }) => (
  <button className="c-card" onClick={onClick}>
    { `${type} (${id})` }
  </button>
)

Card.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Card
