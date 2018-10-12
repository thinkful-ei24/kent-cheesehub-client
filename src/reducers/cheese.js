import * as actions from '../actions'

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}


const cheeseReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_CHEESE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === actions.FETCH_CHEESE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cheeses: action.cheeses
    })
  } else if (action.type === actions.FETCH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state
}