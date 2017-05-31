const initialState = {
  searchText: '',
  showCompleted: false
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
