import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FaqPage from './FaqPage';
import TodoPage from './TodoPage';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/todos" component={TodoPage} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
