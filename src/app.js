import { createStore, combineReducers } from 'redux'

const view = ({ value, onClick }) =>
  <div value={value} onClick={onClick}>
    <p>Click me</p>
  </div>