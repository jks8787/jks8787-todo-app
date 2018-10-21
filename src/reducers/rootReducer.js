import {combineReducers} from 'redux';
import todos from './todosReducer';

const rootReducer = combineReducers({
  todos // this will be the key in the state of the application
});

export default rootReducer;
