import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainNavBar from './components/navigation/mainNavbar/mainNavbar'
import HorizontalSplit from './components/horizontalSplitLayout/horizontalSplitLayout'
import Topics from './components/topics/topics'
import NoMatch from './components/noMatch'
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
        <BrowserRouter>
          <div>
            <MainNavBar />
            <Switch>
              <Route exact path="/">
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
              </Route>
              <Route path="/test">
                <div>Hello world</div>
              </Route>
              <Route path="/topics" component={Topics}>
              </Route>
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
