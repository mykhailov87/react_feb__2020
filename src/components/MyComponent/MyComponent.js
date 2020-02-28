// Core
import React, { useCallback, useEffect, useState } from 'react';

function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/post')
      .then(() => {})
      .catch(() => {})
  }, []); // Component did mount

  const onChangeHandler = useCallback((ev) => {
    const value = ev.target.value;
    if (value.trim() !== '') {
      setInputValue(value);
    }
  }, []);

  return (
    <>
      <img src="" alt="" />
      <input
        type="text"
        onChange={onChangeHandler}
        value={inputValue}
      />
      <hr />
      <br />
    </>
  );
}

export default MyComponent;
