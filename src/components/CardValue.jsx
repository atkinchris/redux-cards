import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardValue = ({ children, className }) => (
  <div className={classNames('c-card-value', className)}>
    <span className="c-card-value__inner">{ children }</span>
  </div>
)

CardValue.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

CardValue.defaultProps = {
  className: '',
}

export default CardValue
