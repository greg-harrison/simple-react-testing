import React from 'react'
import PropTypes from 'prop-types'

export default class HorizontalSplit extends React.Component {
  static propTypes = {
    leftSide: PropTypes.element.isRequired,
    rightSide: PropTypes.element.isRequired,
    className: PropTypes.string
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={`horizontal-split-layout flex-container ${this.props.className}`}>
        <div className={`col-6`}>{this.props.leftSide}</div>
        <div className={`col-6`}>{this.props.rightSide}</div>
      </div>
    )
  }
}
