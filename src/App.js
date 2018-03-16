import React, { Component } from 'react';
import { cardData } from './assets/data'
import HorizontalSplit from './components/horizontalSplitLayout/horizontalSplitLayout'
import Toggle from './components/toggle/toggle'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cardData: cardData
    }
  }

  render() {
    return (
      <div className="App">
        <HorizontalSplit
          leftSide={
            (
              <div>
                <Toggle onToggle={on => console.log('toggle', on)} />
              </div>
            )
          }
          rightSide={
            (<div>HELLO TEST</div>)
          }
        />
      </div>
    );
  }
}

export default App;
