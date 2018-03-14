import React, { Component } from 'react';
import { CardSection } from './components/cardSection/CardSection'
import { CardItem } from './components/cardItem/CardItem'
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
        <header className="App-header">
          <h2>Going to use this repo to test weird React.Child issues that I'm having</h2>
          <div>Had to get the dev branch set up</div>
        </header>

        <CardSection>
          {
            map(this.state.cardData, (card) => {
              return (
                <CardItem id={card.id} title={card.title} />
              )
            })
          }
        </CardSection>
      </div>
    );
  }
}

export default App;
