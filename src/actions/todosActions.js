import * as types from './actionTypes';

function url() {
  return 'https://jsonplaceholder.typicode.com/todos';
}

export function receiveTodos(data) {
  // todo.title, todo.completed, todo.id
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
