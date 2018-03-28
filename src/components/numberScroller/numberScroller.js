import React from 'react'

export default class NumberScroller extends React.Component {
  // Keep rendering and reseting the statevalue until
  // for loop (x<10)
  //  update state.num to Math.random values
  // when x = 10
  //  set the actual value to the item
  state = { num: 0 }

  runLoop() {
    console.log('runLoop');
    for (var x; x <= 10; x++) {
      this.setState({ num: Math.random })
      this.forceUpdate()
    }
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentDidUpdate() {
    console.log('update');
  }



  render() {
    this.runLoop()

    return (
      <div>
        {this.state.num}
      </div>
    )
  }
}
