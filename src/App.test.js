import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

// TODO: we will need to mock the request to fetch our todos

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   const store = configureStore();
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });
