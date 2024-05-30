import AllReducer from './reducers'
import { thunk } from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const initialState = {}

const store = createStore(AllReducer, initialState, applyMiddleware(thunk))


export default store