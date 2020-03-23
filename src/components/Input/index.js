// Modules
import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Engine
import { inputValueSelector } from '../../engine/core/search/selectors';
import { setInputValue } from '../../engine/core/search/actions';

function Input() {
  const inputValue = useSelector(inputValueSelector);
  const dispatch = useDispatch();

  const setInput = useCallback((ev) => {
    const value = ev.target.value;
    dispatch(setInputValue(value));
  }, [dispatch]);

  return (
    <input
      onChange={setInput}
      type="text"
      value={inputValue}
    />
  )
}

export default Input
