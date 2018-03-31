import React from 'react'
import Switch from '../switch/switch'
import PropTypes from 'prop-types'

import './toggle.css'


export default class Toggle extends React.Component {
  static propTypes = {
    onToggle: PropTypes.func
  }

  static defaultProps = {
    onToggle: () => { }
  }

  state = { on: false }
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on)
      },
    )
  render() {
    const { on } = this.state
    return (
      <Switch on={on} onClick={this.toggle} />
    )
  }
}
