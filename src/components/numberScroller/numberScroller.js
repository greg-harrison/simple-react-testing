import React from 'react'

export default class NumberScroller extends React.Component {
  // Keep rendering and reseting the statevalue until
  // for loop (x<10)
  //  update state.num to Math.random values
  // when x = 10
  //  set the actual value to the item
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
