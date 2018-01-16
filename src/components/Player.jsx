import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectPlayer } from '../store/selectors'

const Player = ({ player }) => (
  <div>
    <pre>{ JSON.stringify(player) }</pre>
  </div>
)

Player.propTypes = {
  player: PropTypes.shape({}).isRequired,
}

const mapStateToProps = state => ({
  player: selectPlayer(state),
})

export default connect(mapStateToProps)(Player)
