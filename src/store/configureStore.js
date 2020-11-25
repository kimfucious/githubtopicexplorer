import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

// TODO:  conditionally import packages based on env

export default function configureStore(preloadedState) {
  // use this to show dev tools in any env
  const showRegardless = false;

  const middlewares = [thunkMiddleware, logger];
  if (process.env.NODE_ENV !== "development" || showRegardless) {
    middlewares.pop();
  }
  const middlewareEnhancers = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancers];

  const composedEnhancers =
    process.env.NODE_ENV === "development" || showRegardless
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers);
  return createStore(rootReducer, preloadedState, composedEnhancers);
}
