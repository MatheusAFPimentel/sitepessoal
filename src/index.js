import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from '../src/components/Menu/index'
import Header from '../src/components/Header/index'


ReactDOM.render(
  <React.StrictMode>
    <Menu/>
    <Header/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

