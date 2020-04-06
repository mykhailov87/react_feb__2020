// Modules
import { fromJS } from 'immutable'
import { createReducer } from 'redux-immutablejs'

const initialState = fromJS({
  input: ''
});

export const searchReducer = createReducer(initialState, {
  SET_INPUT_VALUE: (state, action) => {
    const { payload } = action;
    return state.setIn(['input'], payload);
  }
});

// export function searchReducer (state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case 'SET_INPUT_VALUE': {
//       return {
//         ...state,
//         input: payload
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// }
