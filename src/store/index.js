import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const configuredStore = () => {

  const middleware = []

  let logger = createLogger({
    collapsed: (getState, action) => {
      return (
        action.expandInLog ? false : true
      )
    },
    level: 'info'
  })

  middleware.push(thunk, logger)

  return createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
  ))
}

export default configuredStore
