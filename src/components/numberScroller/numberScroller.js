import React from 'react'

export default class NumberScroller extends React.Component {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    const { num } = this.props

    return (
      <div>
        {num}
      </div>
    )
  }
}
