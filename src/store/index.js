import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const middleware = []

let logger = createLogger({
  collapsed: (getState, action) => {
    return (
      action.expandInLog ? false : true
    )
  },
  level: 'info'
})

middleware.push(logger)

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware)
))

export default store
