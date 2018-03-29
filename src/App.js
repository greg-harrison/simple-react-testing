import React from 'react';
import { Provider } from 'react-redux';
import {
  cardData
} from './assets/data'
import HorizontalSplit from './components/horizontalSplitLayout/horizontalSplitLayout'
import Toggle from './components/toggle/toggle'
import DisplayCard from './components/displayCard/displayCard'
import TodoForm from './containers/todoForm'

import store from './store'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cardData: cardData
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
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
              <TodoForm />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
