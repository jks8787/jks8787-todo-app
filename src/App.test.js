import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const store = configureStore();
  const app = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(app).toBe.ok
});
