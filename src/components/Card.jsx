import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ card, onClick }) => (
  <button className="c-card" onClick={onClick}>
    <div className="c-card__inner">
      { card.id }
    </div>
    <div className="c-card__value c-card__value--top">
      { card.name }
    </div>
    <div className="c-card__value c-card__value--bottom-left">
      { card.health - card.damage }
    </div>
    <div className="c-card__value c-card__value--bottom-right">
      { card.attack }
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
