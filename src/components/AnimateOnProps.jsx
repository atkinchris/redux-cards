import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const AnimateOnProps = (ComposedComponent) => {
  const wrappedComponentName = ComposedComponent.displayName || ComposedComponent.name || 'Component'

  class Wrapper extends Component {
    constructor(props) {
      super(props)

      this.state = {
        changed: false,
        timerId: undefined,
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.children !== this.props.children) {
        const { timerId } = this.state
        if (timerId) {
          clearTimeout(timerId)
        }

        console.log('CHANGES!')

        const { timeout } = nextProps
        const timer = setTimeout(() => this.setState({ changed: false }), timeout)

        this.setState({
          changed: true,
          timerId: timer,
        })
      }
    }

    render() {
      const composedProps = {
        ...this.props,
        className: classNames(this.props.className, {
          changed: this.state.changed,
        }),
      }

      return <ComposedComponent {...composedProps} />
    }
  }

  Wrapper.propTypes = {
    className: PropTypes.string,
    timeout: PropTypes.number,
  }

  Wrapper.defaultProps = {
    className: '',
    timeout: 500,
  }

  Wrapper.displayName = `AnimateOnProps(${wrappedComponentName})`

  return Wrapper
}

export default AnimateOnProps
