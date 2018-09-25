import React, { Component } from 'react';
import CheckBox from './CheckBox';

class TodoContainer extends Component {
  onChange() {
    const props = this.props;
    props.updateDone(props.todo, !props.todo.done);
  }
  render() {
    const props = this.props;
    const classes = "todo" + (props.todo.done ? " done" : "");
    return (
        <div className={classes}>
          <CheckBox
            checked={props.todo.done}
            onChange={this.onChange.bind(this)}
          />
          {props.todo.title}
        </div>
    );
  }
}

export default TodoContainer;
