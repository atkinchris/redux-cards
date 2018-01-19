import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ card, onClick }) => (
  <button className="c-card" onClick={onClick}>
    { card.id }
    <div className="c-card-values">
      <div className="c-card-values__value">{ card.health - card.damage }</div>
      <div className="c-card-values__value">{ card.attack }</div>
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
