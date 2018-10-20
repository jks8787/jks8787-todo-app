import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const app = shallow(
    <App />
  );
  expect(app).toBe.ok
});
