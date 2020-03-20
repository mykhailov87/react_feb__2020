// Core
import { createLogger } from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// Middleware

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

const dev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local';
// const sagaMiddleWare = createSagaMiddleware();
const middleware = [];

if (dev) {
  middleware.push(logger);
}

export { dev, middleware };
