import React from 'react'
import PropTypes from 'prop-types'

export default class DisplayCard extends React.Component {
  static propTypes = {
    cardTitle: PropTypes.string,
    children: PropTypes.node
  }
  static defaultProps = {
    cardTitle: '',
    children: <span></span>
  }

  static defaultProps = {
    onToggle: () => { }
  }

  render() {
    console.log('this.props.className', this.props.className);
    return (
      <div className={'displayCard card p-0 ' + this.props.className}>
        <div className="card-header">
          {this.props.cardTitle}
        </div>
        <div>
          {this.props.children}
        </div>
      </div >
    )
  }
}
