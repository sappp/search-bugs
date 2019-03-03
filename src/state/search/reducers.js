import { combineReducers } from 'redux';
import types from './types';

/* State Shape
{
    input: string,    
}
*/

const inputReducer = (state = "", action) => {
  switch (action.type) {
    case types.UPDATE_INPUT:
      return action.payload.input
    default:
      return state
  }
}

export default combineReducers({
  input: inputReducer,
});
