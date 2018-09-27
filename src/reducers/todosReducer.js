import initialState from './initialState';
import {FETCH_TODOS, RECEIVE_TODOS} from '../actions/actionTypes';
import utils from './utils';

export default function stuff(state = initialState, action) {
  let newState;
  switch (action.type) {
    case FETCH_TODOS:
      console.log('FETCH')
      return action;
    case RECEIVE_TODOS:
      newState =  Object.assign({}, state);
      const fetchedTodos = action.todos.map(todo =>
        utils.createTodo(todo.title, todo.completed, todo.id)
      );
      newState.todos = fetchedTodos;
      console.log('RECEIVE')
      console.log(newState)
      return newState;
    default:
      return state;
  }
}
