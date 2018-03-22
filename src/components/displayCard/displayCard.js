import React from 'react'

export default class DisplayCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={`card p-0 ${this.props.className}`}>
        <div className="card-header">
          {this.props.cardTitle}
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}