import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectTopCards } from '../store/selectors'
import Card from './Card'

const Cards = ({ cards }) => (
  <div className="c-grid">
    { cards.map(card => <Card key={card.id} {...card} />) }
  </div>
)

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = state => ({
  cards: selectTopCards(state, 3),
})

export default connect(mapStateToProps)(Cards)
