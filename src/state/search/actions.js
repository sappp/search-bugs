import types from './types'


const updateInput = (input) => ({
  type: types.UPDATE_INPUT,
  payload: { input }
})


export {
  updateInput,
};
