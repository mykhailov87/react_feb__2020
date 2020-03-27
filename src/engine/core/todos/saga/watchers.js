// Modules
import { all, call, takeEvery, takeLatest, debounce } from 'redux-saga/effects'
// Types
import { asyncTypes } from './asyncTypes'
// Workers
import { callGetTodoListDataWorker } from './worker'

function* watchGetTodoListData() {
  // yield debounce(500, asyncTypes.GET_TODO_LIST_DATA_ASYNC, callGetTodoListDataWorker)
  yield takeLatest(asyncTypes.GET_TODO_LIST_DATA_ASYNC, callGetTodoListDataWorker)
}

export function* todosWatcher () {
  yield all([
    call(watchGetTodoListData)
  ])
}
