
import { combineReducers } from 'redux'
import modules from '../reducers/moduleReducer'
import validatedFields from '../reducers/validatedFieldsReducer'

export default combineReducers({
  modules,
  validatedFields
})

// adding crap