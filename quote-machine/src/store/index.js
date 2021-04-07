import thunk from 'redux-thunk'
import redux from 'redux'
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'

const store = createStore(reducer,applyMiddleware(thunk)) 

export default store