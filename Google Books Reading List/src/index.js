import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import configureStore from './store/Store';

const store = configureStore({});

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));