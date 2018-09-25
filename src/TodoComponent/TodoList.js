import React, { Component } from 'react';
import TodoContainer from './TodoContainer';

class TodoList extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        {
          props.todos.map((todo) =>
            <TodoContainer
              key={todo.id}
              todo={todo}
              updateDone={props.updateDone}
            />
          )
        }
      </div>
    );
  }
}

export default TodoList;
