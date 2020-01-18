import { combineReducers, createStore } from 'redhooks'

const InitialState = { state: 'SetState' }

const greeting = (state = InitialState, { type, payload }) => {
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

// const rootReducer =
const store = createStore(combineReducers({ greeting, counter }))

export { store }
