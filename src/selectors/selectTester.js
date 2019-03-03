import { createSelector } from 'reselect'


const getList = state => state.tester.list;
const showErrorMessage = state => state.tester.showError;
const getSortBy = state => state.tester.sort.by;
const getSortAscending = state => state.tester.sort.ascending;

const getRepresntList = createSelector(
  [getList, getSortBy, getSortAscending],
  (list, sortBy, ascending) => list.map(t => ({
    firstName: t.firstName,
    lastName: t.lastName,
    country: t.country,
    bugs: t.bugs.map(b => b.title).join()
  })
  ).sort((a, b) => (
    ascending ?
      (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0) :
        (a[sortBy] < b[sortBy]) ? 1 : ((b[sortBy] < a[sortBy]) ? -1 : 0) 
  ))
);

export default {
  getRepresntList,
  showErrorMessage,
};
