import { createSelector } from 'reselect'

const getInputSearch = state => state.search.input

const showInputError = createSelector(
  [getInputSearch],
  (input) => {
    if (input.length === 0) {
      return false;
    }
    if (input.length < 2 || input.length > 12) {
      return true
    }
  }
)

const disableSearchBtn = createSelector(
  [getInputSearch, showInputError],
  (input, inputError) => {
    const inputStatus = (input === null || input.length === 0)
    return (inputStatus || inputError)
  }
)

export default {
  getInputSearch,
  showInputError,
  disableSearchBtn
}
