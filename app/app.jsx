import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'todoApp';
import { setTodos, getTodos } from './api/todoAPI';
import { setSearchText, toggleShowCompleted, addTodo, toggleTodo, addTodos} from './actions/actions';
import configStore from './store/store';

const store = configStore();

store.subscribe(() => {
  const state = store.getState();
  setTodos(state.todos);
})

const initialTodos = getTodos();
store.dispatch(addTodos(initialTodos));

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={ store }>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
