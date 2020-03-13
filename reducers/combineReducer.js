import { combineReducers } from 'redux'
import todos from './todoReducer'
import users from './userReducer'

export default combineReducers({
    todos,
    users
})