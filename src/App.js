import React, { Component } from 'react';
import map from 'lodash/map'
import { cardData } from './assets/data'

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
      </div>
    );
  }
}

export default App;
