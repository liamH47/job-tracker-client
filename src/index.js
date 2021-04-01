import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import './index.css'
window['__react-beautiful-dnd-disable-dev-warnings'] = true;

const plswork = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={plswork}>
        <App />
    </Provider>, 
    document.getElementById('root')
);