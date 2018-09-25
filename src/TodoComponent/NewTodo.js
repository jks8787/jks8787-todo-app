import React, { Component } from 'react';
import CheckBox from './CheckBox';
import InputText from './InputText';

class NewTodo extends Component {
  render() {
    const props = this.props;
    return (
      <div className="todo new">
        <InputText
          onChange={props.onChange}
          value={props.newTodoTitle}
          onBlurOrSubmit={props.onBlurOrSubmit}
          />
      </div>
    );
  }
}

export default NewTodo;
