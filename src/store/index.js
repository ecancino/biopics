import { createStore } from 'redux'

import reducers from '../reducers'
import middleware from './middleware'
const initialState = {}

export const { dispatch, subscribe, getState } = createStore(reducers, initialState, middleware)

export default { dispatch, subscribe, getState }
