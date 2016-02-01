
import { createStore, combineReducers } from 'redux'
import reducer from '../reducers/index'

export const stvStore = createStore(reducer)

export const dispatch = stvStore.dispatch

export const prepareActions = actions =>
  Object.keys(actions)
    .reduce((list, key) => ({
      ...list,
      [key]: args => dispatch(actions[key](args))
    }), {})
