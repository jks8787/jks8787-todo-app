import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from './CheckBox';

// BELOW the comment is how the test would look without Enzyme

// it('renders without crashing', () => {
//
//   const div = document.createElement('div');
//   ReactDOM.render(
//     <CheckBox
//       checked={false}
//       disabled={false}
//       onChange={() => {}}
//     />,
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const checkBox = shallow(
    <CheckBox
      checked={false}
      disabled={false}
      onChange={() => {}}
    />);
  expect(checkBox).toBe.ok
});
