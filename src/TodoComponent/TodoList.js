import React, { Component } from 'react';
import TodoContainer from './TodoContainer';

class TodoList extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        { props.todos.length > 0 ?
          props.todos.map((todo) =>
            <TodoContainer
              key={todo.id}
              todo={todo}
              updateDone={props.updateDone}
            />
          ) : null
        }
      </div>
    );
  }
}

export default TodoList;
