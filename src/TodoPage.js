import React, { Component } from 'react';
import TodoComponent from './TodoComponent/TodoComponent';

const pinkStyle = {
  color: 'pink'
};

const violetStyle = {
  color: 'violet'
};

class TodoPage extends Component {
  render() {
    return (
      <div className="todo-page">
        <h1>todos page component</h1>
        <div>
          <span style={pinkStyle}>pink</span> is needs to be done
          <br/>
          <span style={violetStyle}>violet</span> is had been done
        </div>
        <TodoComponent />
      </div>
    );
  }
}

export default TodoPage;
