import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

const applicationSetup = (

    <BrowserRouter>
      <App />
    </BrowserRouter>

)
ReactDOM.render(applicationSetup, document.getElementById('root'));
