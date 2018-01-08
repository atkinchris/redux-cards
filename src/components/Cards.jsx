import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectTopCards } from '../store/selectors'
import { chooseCard as chooseCardAction } from '../store/actions'
import Card from './Card'

const Cards = ({ cards, chooseCard }) => (
  <div className="c-grid">
    {
      cards.map(card => (
        <Card
          {...card}
          key={card.id}
          onClick={() => chooseCard(card.id)}
        />
      ))
  }
  </div>
)

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  chooseCard: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  cards: selectTopCards(state, 3),
})

const mapDispatchToProps = {
  chooseCard: chooseCardAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
