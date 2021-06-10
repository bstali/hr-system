import userDetailsReducer from './userDetailsReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    userDetails: userDetailsReducer
})

export default allReducers;