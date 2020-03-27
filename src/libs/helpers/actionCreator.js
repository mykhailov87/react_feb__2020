export function actionCreator(actionType, actionPayload) {
  return {
    type: actionType,
    payload: actionPayload
  }
}
