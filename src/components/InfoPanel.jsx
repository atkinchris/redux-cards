import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../store/actions'
import { selectPlayer, selectDeck } from '../store/selectors'

const InfoPanel = ({ player, deck, fillHand }) => (
  <div className="flex info-panel">
    <div className="info-element info-element--health">
      { `${player.health - player.damage} / ${player.health}` }
    </div>
    <div className="info-element">Deck: { deck.length }</div>
    <button className="info-element button-standalone" onClick={fillHand}>Fill Hand</button>
  </div>
)

InfoPanel.propTypes = {
  player: PropTypes.shape({
    health: PropTypes.number.isRequired,
    damage: PropTypes.number.isRequired,
  }).isRequired,
  deck: PropTypes.arrayOf(PropTypes.string).isRequired,
  fillHand: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  player: selectPlayer(state),
  deck: selectDeck(state),
})

export default connect(mapStateToProps, actions)(InfoPanel)
