import { connect } from 'react-redux';
import React from 'react';
import { toggleTodo } from '../actions/actions';
import moment from 'moment';

var Todo = React.createClass({
  render:function () {
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return(
      <div className={todoClassName} onClick={() => {
        dispatch( toggleTodo(id) );
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = connect(

)(Todo);
