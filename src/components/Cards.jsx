import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectHand } from '../store/selectors'
import Card from './Card'

const Cards = ({ cards }) => (
  <div className="c-grid">
    {
      cards.map(card => (
        <Card
          key={card.id}
          {...card}
        />
      ))
  }
  </div>
)

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = state => ({
  cards: selectHand(state),
})

export default connect(mapStateToProps)(Cards)
