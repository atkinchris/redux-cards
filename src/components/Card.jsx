import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ card, onClick }) => (
  <button className="c-card" onClick={onClick}>
    <pre>{ JSON.stringify(card, null, '\t') }</pre>
  </button>
)

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Card
