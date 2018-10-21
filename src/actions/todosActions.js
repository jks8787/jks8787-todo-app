import * as types from './actionTypes';

function url() {
  return 'https://jsonplaceholder.typicode.com/todos';
}

export function receiveTodos(data) {
  return {type: types.RECEIVE_TODOS, todos: data};
}

export function fetchTodos() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json.slice(0, 5))));
  };
}

export function setNewTodoTitle(data) {
  return {type: types.SET_NEW_TODO_TITLE, title: data};
}

export function addNewTodo(data) {
  return {type: types.ADD_NEW_TODO, todo: data};
}
