import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const middlewareLogger = store => next => action => {
  next(action)
}

const store = createStore(reducer, 
                          applyMiddleware(middlewareLogger, thunk))

export default store
