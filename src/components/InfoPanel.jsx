import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectPlayer, selectDeck } from '../store/selectors'

const InfoPanel = ({ player, deck }) => (
  <div className="flex info-panel">
    <div className="info-panel__element">Health: { player.health - player.damage }</div>
    <div className="info-panel__element">Deck: { deck.length }</div>
  </div>
)

InfoPanel.propTypes = {
  player: PropTypes.shape({
    health: PropTypes.number.isRequired,
    damage: PropTypes.number.isRequired,
  }).isRequired,
  deck: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = state => ({
  player: selectPlayer(state),
  deck: selectDeck(state),
})

export default connect(mapStateToProps)(InfoPanel)
