import uuid from 'node-uuid';
import moment from 'moment';

const initialState = {
  searchText: '',
  showCompleted: false,
  todos: []
}

export const searchTextReducer = ( state = initialState.searchText, action ) => {
  switch ( action.type ) {
    case 'SET_SEARCH_TEXT': {
      return action.payload;
    }
  }
  return state;
};

export const showCompletedReducer = ( state = initialState.showCompleted, action ) => {
  switch ( action.type ) {
    case 'TOGGLE_SHOW_COMPLETED': {
      return !state;
    }
  }
  return state;
};

export const todosReducer = ( state = initialState.todos, action ) => {
  switch ( action.type ) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: uuid(),
          text: action.payload,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    }
    case 'ADD_TODOS': {
      return [
        ...state,
        ...action.payload
      ]
    }
    case 'TOGGLE_TODO': {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          var nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          }
        } else {
          return todo;
        }
      });
    }
  }
  return state;
};
