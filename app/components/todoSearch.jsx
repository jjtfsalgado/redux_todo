var React = require('react');
import { connect } from 'react-redux';
import { setSearchText, toggleShowCompleted } from '../actions/actions';

var TodoSearch = React.createClass({
  render: function(){
    const { dispatch, showCompleted, searchText } = this.props;
    return(
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={ searchText } onChange={() => {
            dispatch(setSearchText(this.refs.searchText.value));
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
              dispatch(toggleShowCompleted());
            }}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
