import React from 'react'

export default class NumberScroller extends React.Component {
  // Keep rendering and reseting the statevalue until
  // for loop (x<10)
  //  update state.num to Math.random values
  // when x = 10
  //  set the actual value to the item
  state = { num: 0 }

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    let x = 0
    for (x; x < 10; x++) {
      this.setState({
        num: Math.abs(Math.random)
      })
    }
    if (x >= 10) {
      this.setState({
        num: this.props.num
      })
    }


    console.log('x', x);

    return (
      <div>
        {this.state.num}
      </div>
    )
  }
}
