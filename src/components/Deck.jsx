import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectDeck } from '../store/selectors'

const Deck = ({ deck }) => (
  <div className="c-deck">
    { `Deck size: ${deck.length}`}
  </div>
)

Deck.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = state => ({
  deck: selectDeck(state),
})

export default connect(mapStateToProps)(Deck)
