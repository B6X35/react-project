import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import { persistor } from './redux/store';


import './fonts/VerdanaBold.woff2';
import './fonts/verdana.woff2';
import './fonts/GothamPro-Light.woff';
import './fonts/GothamPro-Bold.woff';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
