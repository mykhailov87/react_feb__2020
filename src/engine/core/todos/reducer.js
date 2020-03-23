// import * as types from './types'
import { SET_TODO_LIST_DATA } from './types'

const initialState = {
  list: [],
  isLoading: true,
};

export function todosReducer (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TODO_LIST_DATA: {
      return {
        ...state,
        list: payload
      }
    }
    case 'OLOLO_OLOLO_OLOLO': {
      return {
        ...state,
        list: [{}, {}, {}]
      };
    }
    case 'SET_TODO_LIST_DATA_LOADING': {
      return {
        ...state,
        isLoading: payload
      }
    }
    default: {
      return state;
    }
  }
}
