// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { todosWatcher } from '../../core/todos/saga/watchers';

export function* rootSaga() {
  yield all([
    call(todosWatcher),
  ]);
}
