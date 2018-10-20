import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow , mount} from 'enzyme';

it('renders without crashing', () => {
  const app = shallow(
    <App />
  );
  expect(app).toBe.ok
  expect(app.html()).toContain('App-header')

  const appMounted = mount(<App />);
  expect(appMounted).toBe.ok
  const header = appMounted.find('.App-header');
  expect(header.length).toEqual(1)
});
