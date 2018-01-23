import { createStore } from 'redux'

import reducers from '../reducers'
import middleware from './middleware'
const initialState = {}

const store = createStore(reducers, initialState, middleware)

export const { dispatch, subscribe, getState } = store

export default store
