import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { playCard as playCardAction } from '../store/actions'
import { selectHand, selectCards } from '../store/selectors'
import Card from './Card'

const Cards = ({ cards, playCard }) => (
  <div className="c-flex">
    {
      cards.map(card => (
        <Card
          key={card.id}
          onClick={() => playCard(card)}
          card={card}
        />
      ))
  }
  </div>
)

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  playCard: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  cards: selectCards(state, selectHand(state)),
})

const mapDispatchToProps = {
  playCard: playCardAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
