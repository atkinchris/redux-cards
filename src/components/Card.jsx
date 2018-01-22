import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ card, onClick }) => (
  <button className="c-card" onClick={onClick}>
    <div className="c-card-text">
      <div>{ card.name }</div>
      <div>Health: { card.health - card.damage }</div>
      <div>Attack: { card.attack }</div>
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
