import React from 'react'
import PropTypes from 'prop-types'

import CardValue from './CardValue'
import AnimateOnProps from './AnimateOnProps'

const AnimatedValue = AnimateOnProps(CardValue)

const Card = ({ card, onClick }) => (
  <button className="c-card" onClick={onClick}>
    <div className="c-card-text">
      { card.name }
    </div>
    <div className="c-card-values">
      <AnimatedValue>{ card.health - card.damage }</AnimatedValue>
      <CardValue>{ card.attack }</CardValue>
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
