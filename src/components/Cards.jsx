import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectCards } from '../store/selectors'

const Cards = ({ cards }) => (
  <div className="c-grid">
    {
      cards.map(({ id }) => (
        <div key={id}>{ id }</div>
      ))
    }
  </div>
)

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = state => ({
  cards: selectCards(state),
})

export default connect(mapStateToProps)(Cards)
