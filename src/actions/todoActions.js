import * as types from './actionTypes';

function url() {
  return 'some-url';
}

export function receiveTodos(json) {
  return {type: types.RECEIVE_TODOS, todos: json};
}

export function fetchTodos() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)));
  };
}
