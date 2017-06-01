import { connect } from 'react-redux';
import React from 'react';
import Todo from 'Todo';
import { filterTodos } from '../api/todoAPI';

var TodoList = React.createClass({
  render:function () {
    var { todos, showCompleted, searchText } = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return(
          <p className="container__message">Nothing to do</p>
        )
      }
      return filterTodos( todos, showCompleted, searchText ).map((todo) => {
        return(
          <Todo key={todo.id} {...todo} />
        )
      })
    };

    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = connect(
  (state) => {
    return state;
  }
)(TodoList);
