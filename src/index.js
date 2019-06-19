import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './containers/App';
//import {robots} from './robots';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello greeting={'Hello Welcome to React'} />, document.getElementById('root'));

ReactDOM.render(
    <App />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
