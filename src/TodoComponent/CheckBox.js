import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  render() {
    const props = this.props;
    return (
       <input
               type="checkbox"
               checked={props.checked}
               disabled={props.disabled}
               onChange={props.onChange}
           />
         );
  }
}

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

export default CheckBox;
