import { combineReducers } from 'redhooks'

const greeting = (state = 'good morning', { type, payload }) => {
  switch (type) {
    case 'GREET':
      return payload
    default:
      return state
  }
}

const counter = (state = 0, { type }) => {
  switch (type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({ greeting, counter })

export default rootReducer
