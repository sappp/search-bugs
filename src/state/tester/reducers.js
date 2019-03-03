import { combineReducers } from 'redux'
import types from './types'

/* State Shape
{
    list: array,
    showError: bool,
    sort {
      by: string,
      ascending: bool
    }
}
*/

const listReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TESTER_SUCCESS:
      const data = action.payload.data
      return Array.isArray(data) ? data : [data]
    default:
      return state
  }
}


const showErrorReducer = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_TESTER:
      return false
    case types.FETCH_TESTER_SUCCESS:
      return false
    case types.FETCH_TESTER_FAILD:
      return true
    default:
      return state
  }
}

const sortReducer = (state = { by: "firstName", ascending: true}, action) => {
  switch (action.type) {
    case types.CHANGE_SORT_BY:
      return {
        by: action.payload.sortBy,
        ascending: true,
      }
    case types.CHANGE_SORT_ASCENDING:
      return {
        ...state,
        ascending: !state.ascending
      }
    case types.FETCH_TESTER:
      return {
        by: "firstName",
        ascending: true
      }
    default:
    return state
  }
}

export default combineReducers({
  list: listReducer,
  showError: showErrorReducer,
  sort: sortReducer,
})
