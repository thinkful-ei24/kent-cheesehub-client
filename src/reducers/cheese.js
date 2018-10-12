import {
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_ERROR
} from '../actions/cheese'

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export const cheeseReducer = (state=initialState, action) => {
  if (action.type === FETCH_CHEESES_REQUEST) {
    console.log('request ran');
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_CHEESES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cheeses: action.cheeses
    })
  } else if (action.type === FETCH_CHEESES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state
}