import React, { Component } from 'react';
import map from 'lodash/map'
import { cardData } from './assets/data'
import HorizontalSplit from './components/horizontalSplitLayout/horizontalSplitLayout'

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
            (<div>HELLO WORLD</div>)
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
