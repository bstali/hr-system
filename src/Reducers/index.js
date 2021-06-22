import employeeDetailsReducer from './employeeDetailsReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    employeeDetails: employeeDetailsReducer,
   
})

export default allReducers;