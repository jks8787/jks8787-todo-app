import initialState from './initialState';
import {FETCH_TODOS, RECEIVE_TODOS} from '../actions/actionTypes';

export default function stuff(state = initialState.todos, action) {
  let newState;
  switch (action.type) {
    case FETCH_TODOS:
      console.log('FETCH')
      return action;
    case RECEIVE_TODOS:
      newState = action.todos;
      console.log('RECEIVE')
      return newState;
    default:
      return state;
  }
}
