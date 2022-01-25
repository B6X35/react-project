import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './redux/store';

import './fonts/VerdanaBold.woff2';
import './fonts/verdana.woff2';
import './fonts/GothamPro-Light.woff';
import './fonts/GothamPro-Bold.woff';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
