import types from './types'
import * as testerApi from '../../services/apis/testerApi';

const fetchTester = () => ({
  type: types.FETCH_TESTER
})

const fetchTesterSuccess = data => ({
  type: types.FETCH_TESTER_SUCCESS,
  payload: { data }
})

const fetchTesterFaild = data => ({
  type: types.FETCH_TESTER_FAILD
})

const fetchTesterOperation = () => (dispatch, getState) => {
  dispatch(fetchTester())
  const { search } = getState();

  testerApi.getTester(search.input).then(res => {
    if (Array.isArray(res) || !res.hasOwnProperty("error")) {
      dispatch(fetchTesterSuccess(res))
    } else {
      dispatch(fetchTesterFaild())
    }
  }).catch(e => {
    dispatch(fetchTesterSuccess([]))
  })
}

const changeSortBy = sortBy => ({
  type: types.CHANGE_SORT_BY,
  payload: { sortBy }
})

const changeSortAscending = () => ({
  type: types.CHANGE_SORT_ASCENDING
})

const sortOperation = (sort) => (dispatch, getState) => {
  const { tester } = getState();

  if (sort === tester.sort.by) {
    dispatch(changeSortAscending())
  } else {
    dispatch(changeSortBy(sort))
  }
}

export {
  fetchTesterOperation,
  sortOperation,
};
