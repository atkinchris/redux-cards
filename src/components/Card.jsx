import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ card, onClick }) => (
  <button className="card" onClick={onClick}>
    <div className="card-text">
      <pre>{ JSON.stringify(card, null, '  ') }</pre>
    </div>
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
