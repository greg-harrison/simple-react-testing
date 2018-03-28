import React from 'react';
import {
  cardData
} from './assets/data'
import HorizontalSplit from './components/horizontalSplitLayout/horizontalSplitLayout'
import Toggle from './components/toggle/toggle'
import DisplayCard from './components/displayCard/displayCard'
import AnimatedNumber from 'react-animated-number'
import { SearchBar } from './components/searchBar/searchBar'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Number } from 'core-js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cardData: cardData
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <SearchBar className="test w-100" />
          </div>
          <div className="row">
            <DisplayCard
              className="col-6"
              cardTitle='HorizontalSplit Component'
            >
              <HorizontalSplit
                className="w-100"
                leftSide={(<div> Left Side </div>)}
                rightSide={(<div> Right Side </div>)} />
            </DisplayCard>
            <DisplayCard
              className="col-6"
              cardTitle='Toggle Component'
            >
              <Toggle onToggle={
                on => console.log('toggle', on)
              } />
            </DisplayCard>
          </div>
          <div className="row">
            {this.state.cardData.map((item) => (
              <DisplayCard
                className="col-6"
                cardTitle={item.title}
              >
                <p>{item.description}</p>
              </DisplayCard>
            ))}
          </div>
          <div className="row">
            <AnimatedNumber
              value={300}
              initialValue={1}
              style={{
                transition: '0.8s ease-out',
                fontSize: '2rem',
                transitionProperty:
                  'background-color, color, opacity'
              }}
              stepPrecision={0}
              duration={300}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
