// Modules
import { fromJS, Map, List } from 'immutable'
import { createReducer } from 'redux-immutablejs'
// import * as types from './types'
import { SET_TODO_LIST_DATA } from './types'

const initialState = Map({
  list: List(),
  isLoading: true,
});

export const todosReducer = createReducer(initialState, {
  [SET_TODO_LIST_DATA]: (state, action) => {
    const data = fromJS(action.payload);
    return state
      .withMutations((mutor) => {
        mutor.setIn(['list'], data);
        mutor.setIn(['isLoading'], false);
      })
  },

  SET_TODO_LIST_DATA_LOADING: (state, action) => (
    state.setIn(['isLoading'], action.payload)
  ),
});

// export function todosReducer (state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case SET_TODO_LIST_DATA: {
//       return {
//         ...state,
//         list: payload
//       }
//     }
//     case 'OLOLO_OLOLO_OLOLO': {
//       return {
//         ...state,
//         list: [{}, {}, {}]
//       };
//     }
//     case 'SET_TODO_LIST_DATA_LOADING': {
//       return {
//         ...state,
//         isLoading: payload
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// }
