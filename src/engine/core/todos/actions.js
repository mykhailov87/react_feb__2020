import { SET_TODO_LIST_DATA } from './types'

export const setTodoListData = (data) => {
  return {
    type: SET_TODO_LIST_DATA,
    payload: data
  }
};
