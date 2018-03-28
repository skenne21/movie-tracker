import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/appContainer/appContainer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

const applicationSetup = (
  <Provider store={ store } >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

)
ReactDOM.render(applicationSetup, document.getElementById('root'));
