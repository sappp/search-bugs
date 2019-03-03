import React from 'react';
import { connect } from 'react-redux'

import actions from '../state/actions';
import selectors from '../selectors';

import Title from './components/Title';
import ErrorMessage from './components/ErrorMessage';
import SearchSection from './searchSection/SearchSection';
import TableSection from './tableSection/TableSection';

const AppContainer = (selectors) => {
  return (
    <div className="container">
      <Title
        title={"Search Bugs"}
      />
      <SearchSection
        label={"Tester Name"}
        waterMark={"Enter the tester name"}
        btnName={"fetch"}
        inputError={selectors.showSearchError}
        btnDisabled={selectors.btnDisabled}
        onSearchClick={selectors.fetchTester}
        onInputChange={selectors.updateInput}
      />
      {
        selectors.testerShowError ? <ErrorMessage /> : ''
      }
      <TableSection list={selectors.testerList} onSort={selectors.sortOperation} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchInput: selectors.search.getInputSearch(state),
    showSearchError: selectors.search.showInputError(state),
    btnDisabled: selectors.search.disableSearchBtn(state),
    testerList: selectors.tester.getRepresntList(state),
    testerShowError: selectors.tester.showErrorMessage(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInput: (i) => dispatch(actions.searchActions.updateInput(i)),
    fetchTester: () => dispatch(actions.testerActions.fetchTesterOperation()),
    sortOperation: (sortBy) => dispatch(actions.testerActions.sortOperation(sortBy))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
