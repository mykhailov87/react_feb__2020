// Core
import React, { useEffect, useState, useCallback, useRef } from 'react';
import * as PropTypes from 'prop-types';
// Components
import Footer from '../Footer';
import Header from '../Header/Header';
import MyCustomComponent from '../MyCustomComponent/MyCustomComponent';
import MyComponent from '../MyComponent/MyComponent';
// Images
import logo from '../../logo.svg';
// Styles
import './App.css';
import MyClassComponent from '../MyClassComponent/MyClassComponent';

// TODO: read that https://ru.reactjs.org/docs/components-and-props.html
// TODO: read that https://ru.reactjs.org/docs/typechecking-with-proptypes.html
function TodoListItem(props) {
  const { title } = props;
  return (
    <li>{title}</li>
  );
}

function AddButton(props) {
  const { data, item, setItem } = props;

  const addItem = () => { // TODO: bad
    if (item.title.trim()) {
      setItem([ ...data, item ]);
    }
  };

  // TODO: read https://ru.reactjs.org/docs/hooks-reference.html#usecallback
  const addItem1 = useCallback(() => { // TODO: Good
    setItem([ ...data, item ]);
  }, []);

  return (
    <button onClick={addItem1}>add</button>
  );
}

function Input(props) {
  // TODO: read that https://ru.reactjs.org/docs/hooks-state.html
  const [inputValue, setInputValue] = useState('');
  const { data, setItem, ...rest } = props;

  // TODO: read that https://ru.reactjs.org/docs/events.html
  const handleInputChange = useCallback((ev) => {
    const value = ev.target.value;
    setInputValue(value);
  }, []);

  // TODO: read that https://ru.reactjs.org/docs/hooks-reference.html#useref
  const inputRef = useRef(null); // { current: null }

  // TODO: read that https://ru.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    setInputValue('');
  }, [data]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const timeoutId = useRef(0);

  useEffect(() => {
    if (inputValue) {
      console.log('timeoutId.current ', timeoutId.current);
      if (timeoutId.current) {
        // clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(() => {
        // TODO: send request
        console.log('%cSEND_REQUEST ', 'color:red', timeoutId.current);
      }, 500);
      return () => {
        clearTimeout(timeoutId.current);
      };
    }
  }, [inputValue]);

  if (inputRef.current) {
    console.dir(inputRef.current.value);
  }

  // TODO: read about Fragment https://ru.reactjs.org/docs/fragments.html
  return (
    <React.Fragment>
      <input
        ref={inputRef}
        type="text"
        onChange={handleInputChange}
        onFocus={null}
        // onBlur={() => setInputValue('')}
        value={inputValue}
        {...rest}
      />
      <AddButton
        setItem={setItem}
        data={data}
        item={{ id: data.length.toString(), title: inputValue }}
      />
      <MyComponent />
      <MyClassComponent>
        <TodoList />
      </MyClassComponent>
    </React.Fragment>
  );
}

function TodoList() {
  const [data, setState] = useState([
    { id: '0', title: 'Learn React' },
    { id: '1', title: 'Learn Redux' },
  ]);

  // return {}; // <-- Do not do that!!!

  // const data1 = useMemo(() => {}, []);

  // const addItem = (ev) => {
  //   ev.stopPropagation();
  //   ev.preventDefault();
  //   console.log(ev.target.value);
  //   console.log(ev.currentTarget);
  // };

  const addItem = () => {
    const newData = [...data, { id: data.length, title: 'new item' }];
    setState(newData);
    // console.group('click');
    // data.push({ id: data.length, title: 'new item' });
    // console.log(data);
    // console.groupEnd();
  };

  const onFormSubmit = useCallback((ev) => {
    ev.preventDefault();
  }, []);

  return (
    <form onSubmit={onFormSubmit}>
      <Input
        data={data}
        name="my-custom-input"
        setItem={setState}
      />
      <ul>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            {/* This is an example how to use React.Fragment with key */}
            <TodoListItem
              title={item.title}
            />
          </React.Fragment>
        ))}
      </ul>
    </form>
  );
}

function Main() {

  return (
    <main>
      <TodoList />
    </main>
  );
}

function App() {
  // TODO: add state

  useEffect(() => {
    // TODO: add get data function here!
  }, []); // Component did mount

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
