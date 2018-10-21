
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todosActions from '../actions/todosActions';
import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import './TodoComponent.css';

// const createTodo = (title, done, id) => {
//     return {
//       title,
//       done,
//       editing: false,
//       id
//     };
// }

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    props.todosActions.fetchTodos();
    // this.state = {
    //   title: 'Your Todos',
    //   todos: props.todos || [],
    //   newTodoTitle: ''
    // };

   // fetch('https://jsonplaceholder.typicode.com/todos')
   //  .then(response => {
   //    return response.json();
   //  })
   //  .then(json => {
   //    // console.log(JSON.stringify(json));
   //     const todos = json.slice(0, 5).map(todo =>
   //       createTodo(todo.title, todo.completed, todo.id)
   //     );
   //    this.setState({
   //      todos
   //    });
   //  });
  }

  updateNewTodoTitle(event) {
    // this.setState({ newTodoTitle: event.target.value });
    this.props.todosActions.setNewTodoTitle(event.target.value);
  }

  updateDone(todo, done) {
    const todos = this.props.todos.todos;
    const index = todos.findIndex(t => todo.id === t.id);
    // todos[index] = Object.assign(emptyObject, objectToChange, changedParameters);
    todos[index] = Object.assign({}, todo, { done });
    this.setState({ todos });
  }

  addNewTodo() {
    if (!this.props.todos.newTodoTitle) {
      return;
    }
    const todos = this.props.todos.todos.slice(0);
    todos.push({
      title: this.props.todos.newTodoTitle,
      id: todos.length,
      done: false
    });
    // this.setState({ todos, newTodoTitle: '' });
    this.props.todosActions.addNewTodo({
      title: this.props.todos.newTodoTitle,
      id: todos.length,
      done: false
    });
  }

  render() {
    return (
      <div className="todo-component">
        <TodoList
          todos={this.props.todos.todos}
          updateDone={this.updateDone.bind(this)}
        />
        <NewTodo
          onChange={this.updateNewTodoTitle.bind(this)}
          onBlurOrSubmit={this.addNewTodo.bind(this)}
          newTodoTitle={this.props.todos.newTodoTitle}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todosActions: bindActionCreators(todosActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent);
