export const setSearchText = (payload) => {
  return {
    type: 'SET_SEARCH TEXT',
    payload
  }
};

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export const addTodo = (payload) => {
  return {
    type: 'ADD_TODO',
    payload
  }
};

export const toggleTodo = (payload) => {
  return {
    type: 'TOGGLE_TODO',
    payload
  }
};
