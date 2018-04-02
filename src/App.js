import React from 'react';
import { Provider } from 'react-redux';
import HorizontalSplit from './components/horizontalSplitLayout/horizontalSplitLayout'
import Toggle from './components/toggle/toggle'
import DisplayCard from './components/displayCard/displayCard'
import TodoForm from './containers/todoForm'
import TodoList from './containers/todoList'

import store from './store'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {
  componentDidMount() {
    // If you're going to make an AJAX call. It goes here.
    // This allows you to use setState to update the component once the data is retrieved
    // MORE INFO: https://reactjs.org/docs/faq-ajax.html
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <div className="row">
              <HorizontalSplit
                className="w-100"
                leftSide={(
                  <DisplayCard
                    cardTitle="Create a Todo">
                    <TodoForm />
                  </DisplayCard>
                )}
                rightSide={(<TodoList />)}
              />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
