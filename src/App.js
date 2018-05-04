import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainNavBar from './components/navigation/mainNavbar/mainNavbar'
import HorizontalSplit from './components/horizontalSplitLayout/horizontalSplitLayout'
import Topics from './components/topics/topics'
import NoMatch from './components/noMatch'
import DisplayCard from './components/displayCard/displayCard'
import TodoForm from './containers/todoForm'
import TodoList from './containers/todoList'
import GiphySearch from './containers/giphySearch'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {
  render() {
    let navbarClasses = ['navbar', 'navbar-expand-sm', 'navbar-dark', 'bg-dark']

    return (
      <BrowserRouter>
        <div>
          <MainNavBar navbarClasses={navbarClasses} />
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
            <Route path="/gifs" component={GiphySearch}>
            </Route>
            <Route path="/topics" component={Topics}>
            </Route>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
