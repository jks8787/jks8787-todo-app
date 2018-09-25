import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from './CheckBox';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const checkBox = shallow(
    <CheckBox
      checked={false}
      disabled={false}
      onChange={() => {}}
    />);
  expect(checkBox).toBe.ok
  console.log(checkBox.debug());
  expect(checkBox.html()).toContain('checkbox');
});
