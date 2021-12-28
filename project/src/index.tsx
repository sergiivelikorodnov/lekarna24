import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createApiWithoutCallback } from './services/api';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { rootReducer } from './store/reducers/root';

export const api = createApiWithoutCallback();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
