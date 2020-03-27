import { actionCreator } from '../../../../libs/helpers/actionCreator'
import { asyncTypes } from './asyncTypes'

export const asyncActions = Object.freeze({
  getTodoListDataAsync() {
    return actionCreator(asyncTypes.GET_TODO_LIST_DATA_ASYNC)
  }
});
