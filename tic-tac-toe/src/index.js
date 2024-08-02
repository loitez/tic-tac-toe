import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {GameContainer} from './GameContainer';
import { Provider } from 'react-redux';
import {store} from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <GameContainer />
      </Provider>
  </React.StrictMode>
);