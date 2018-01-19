import compose from 'ramda/src/compose'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const devTools = composeWithDevTools({
  autoPause: true,
  actionsBlacklist: ['@@router']
})

const middleware = compose(devTools, applyMiddleware)

export default middleware(thunk, logger)
