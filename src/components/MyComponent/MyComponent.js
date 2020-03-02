// Core
import React, { useCallback, useEffect, useState, memo } from 'react';

function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  // const renderInput = useCallback(() => <input />, []);
  console.log('Rendering...');

  useEffect(() => {
    fetch('http://localhost:3000/post')
      .then(res => res.json())
      .then((data) => {
        setData(data);
      })
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

// https://ru.reactjs.org/docs/react-api.html#reactmemo
export default memo(MyComponent);

// function Form() {
//   const onFormSubmit = (ev) => {
//     ev.preventDefault();
//     const title = ev.target[0].value;
//     api.createTodos({ title })
//       .then(() => api.getTodos())
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   };
//   return (
//     <form onSubmit={onFormSubmit}>
//       <input type="text" />
//       <button type="submit">save</button>
//     </form>
//   );
// }
