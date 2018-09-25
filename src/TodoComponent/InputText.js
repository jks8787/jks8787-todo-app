import React, { Component } from 'react';

class InputText extends Component {
  onKeyPress(event) {
    const props = this.props;
    if (event.key == 'Enter') {
      props.onBlurOrSubmit();
    }
  }
  render() {
    const props = this.props;
    return (
      <input
        type="text"
        placeholder="New todo"
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlurOrSubmit}
        onKeyPress={this.onKeyPress.bind(this)}
      />
    );
  }

}

export default InputText;
