import initialState from './initialState';
import {FETCH_TODOS,
        RECEIVE_TODOS,
        SET_NEW_TODO_TITLE,
        ADD_NEW_TODO} from '../actions/actionTypes';
import utils from './utils';

export default function stuff(state = initialState, action) {
  let newState;
  switch (action.type) {
    case FETCH_TODOS:
      console.log('FETCH');
      return action;
    case RECEIVE_TODOS:
      newState =  Object.assign({}, state);
      const fetchedTodos = action.todos.map(todo =>
        utils.createTodo(todo.title, todo.completed, todo.id)
      );
      newState.todos = fetchedTodos;
      console.log('RECEIVE');
      return newState;
    case SET_NEW_TODO_TITLE:
      newState =  Object.assign({}, state);
      newState.newTodoTitle = action.title;
      console.log('SET');
      return newState;
    case ADD_NEW_TODO:
      newState =  Object.assign({}, state);
      newState.todos = [].concat(state.todos, [action.todo]);
      newState.newTodoTitle = '';
      console.log('ADD');
      return newState;
    default:
      return state;
  }
}
