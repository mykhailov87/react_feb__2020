// Core
import React, { useEffect, useState, useCallback, useRef, lazy, Suspense } from 'react';
import * as PropTypes from 'prop-types';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { List } from 'immutable';
import { useTranslation } from 'react-i18next'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  useParams,
  withRouter,
} from 'react-router-dom';

// Components
import Footer from '../Footer';
import Header from '../Header/Header';
import MyCustomComponent from '../MyCustomComponent/MyCustomComponent';
import MyComponent from '../MyComponent/MyComponent';
import TodoListComponent from '../TodoList/TodoList';
import Form from '../Form/Form';
// Images
import logo from '../../logo.svg';
// Routes
import { routes } from '../../engine/config/routes';
// Store
import { store } from '../../engine/init/store'
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

// function App() {
//   // TODO: add state
//
//   useEffect(() => {
//     // TODO: add get data function here!
//   }, []); // Component did mount
//
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

function Home() {
  const list = useSelector(state => state.getIn(['todos', 'list'], List()));
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('Home')}</h2>
      <div>
        My first router component
        {list.map((_, index) => <p key={index}>{index}</p>)}
      </div>
    </>
  );
}

function About(props) {
  console.log(props);
  return <h2>About</h2>;
}

function Users() {
  if (true) {
    return <Redirect to="error404" />;
  }
  return <h2>Users</h2>;
}

function BlogPost() {
  let { productId } = useParams();

  useEffect(() => {
    // fetch('products/' + productId)
  }, [productId]);

  return <div>Now showing post {productId}</div>;
}


// function Topics() {
//   let match = useRouteMatch();
//
//   return (
//     <div>
//       <h2>Topics</h2>
//
//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>
//
//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.about}>About</Link>
        </li>
        <li>
          <Link to={routes.users}>Users</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <NavLink
            exact
            to="/products/ololo"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >Ololo</NavLink>
        </li>
      </ul>
    </nav>
  );
}

// const config = Object.freeze({
//   items: [
//     { path: routes.home, component: Home },
//   ],
// });

const home = lazy(() => import('../MyComponent/MyComponent'));

function App() {
  // const dispatch = useDispatch();
  const dispatch = store.dispatch;

  useEffect(() => {
    // dispatch({ type: 'OLOLO_OLOLO_OLOLO', payload: 'Hello Roman' });
  }, [dispatch]);

  return (

    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div>
            <Navigation />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              {/*{config.items.map((item) => {*/}
              {/*  if (item.redirect) {*/}
              {/*    return <Redirect to={item.path} />*/}
              {/*  }*/}
              {/*  return (*/}
              {/*    <Route*/}
              {/*      key={item.path}*/}
              {/*      path={item.path}*/}
              {/*      component={item.component}*/}
              {/*    />*/}
              {/*  )*/}
              {/*})}*/}
              <Route
                exact
                path={routes.home} // "/"
                component={Home}
              />
              <Route
                strict
                path={routes.about}
              >
                <About />
              </Route>
              <Route path={routes.users}>
                <Users />
              </Route>
              <Route path="/products/:productId"> {/* "/products/ololo" */}
                <BlogPost />
              </Route>
              <Route path="/error404">
                <div>404 page</div>
              </Route>
              <Route path="/error500">
                <div>Something went wrong :(</div>
              </Route>
              <Route path="/todo" component={TodoListComponent} />
              <Route path="/form" component={Form} />
              <Redirect to="/error404" />
            </Switch>
          </div>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
