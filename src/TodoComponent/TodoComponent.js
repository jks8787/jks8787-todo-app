import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import './TodoComponent.css';

const createTodo = (title, done, id) => {
    return {
      title,
      done,
      editing: false,
      id
    };
}

class TodoComponent extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Your Todos',
      todos: [],
      newTodoTitle: ''
    };

   fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return response.json();
    })
    .then(json => {
      // console.log(JSON.stringify(json));
       const todos = json.slice(0, 5).map(todo =>
         createTodo(todo.title, todo.completed, todo.id)
       );
      this.setState({
        todos
      });
    });
  }

  updateNewTodoTitle(event) {
    this.setState({ newTodoTitle: event.target.value });
  }

  updateDone(todo, done) {
    const todos = this.state.todos;
    const index = todos.findIndex(t => todo.id === t.id);
    // todos[index] = Object.assign(emptyObject, objectToChange, changedParameters);
    todos[index] = Object.assign({}, todo, { done });
    this.setState({ todos });
  }

  addNewTodo() {
    if (!this.state.newTodoTitle) {
      return;
    }
    const todos = this.state.todos.slice(0);
    todos.push({
      title: this.state.newTodoTitle,
      id: todos.length,
      done: false
    });
    this.setState({ todos, newTodoTitle: '' });
  }

  render() {
    return (
      <div className="todo-component">
        <TodoList
          todos={this.state.todos}
          updateDone={this.updateDone.bind(this)}
        />
        <NewTodo
          onChange={this.updateNewTodoTitle.bind(this)}
          onBlurOrSubmit={this.addNewTodo.bind(this)}
          newTodoTitle={this.state.newTodoTitle}
        />
      </div>
    );
  }
}

export default TodoComponent;
