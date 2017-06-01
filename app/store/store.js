import { createStore, applyMiddleware, compose, combineReducers  } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import { searchTextReducer, showCompletedReducer, todosReducer } from '../reducers/reducers';

export default () => {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(createLogger(), promise()),
    // other store enhancers if any
  );

  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  const store = createStore(reducer, enhancer);

  return store;
}
