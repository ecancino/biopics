import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const devTools = composeWithDevTools({
  autoPause: true,
  actionsBlacklist: ['@@router'] 
})

export default devTools(applyMiddleware(thunk, logger))
