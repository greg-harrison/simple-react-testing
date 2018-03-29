
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

let logger = createLogger({
  collapsed: (getState, action) => (
    action.expandInLog ? false : true
  ),
  level: 'info'
})

let middleware = { logger }

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware)
))

export default store
