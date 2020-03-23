// Types
import { SET_INPUT_VALUE } from './types';

export function setInputValue(value) {
  return { type: SET_INPUT_VALUE, payload: value }
}
