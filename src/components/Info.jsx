import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectPlayer, selectDeck } from '../store/selectors'

const Info = ({ player, deck }) => (
  <div className="flex">
    <div>Health: { player.health - player.damage }</div>
    <div>Deck: { deck.length }</div>
  </div>
)

Info.propTypes = {
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

export default connect(mapStateToProps)(Info)
