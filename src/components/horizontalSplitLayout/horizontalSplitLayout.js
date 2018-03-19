import React from 'react'

export default class HorizontalSplit extends React.Component {
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
