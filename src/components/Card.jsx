import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ id, type }) => (
  <div className="c-card">
    { `${type} (${id})` }
  </div>
)

Card.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Card
