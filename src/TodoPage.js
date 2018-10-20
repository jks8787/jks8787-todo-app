import React, { Component } from 'react';
import TodoComponent from './TodoComponent/TodoComponent';

class TodoPage extends Component {
  render() {
    return (
      <div className="todo-page">
        <h1>todos</h1>
        <TodoComponent />
      </div>
    );
  }
}

export default TodoPage;
