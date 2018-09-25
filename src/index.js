import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FaqPage from './FaqPage';
import TodoPage from './TodoPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/todos" component={TodoPage} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
