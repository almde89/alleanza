import 'bootstrap';
import 'whatwg-fetch';
import React from 'react';
import { Provider } from 'react-redux';
import store from './reducers/store.js';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import MenuContainer from './components/Menu/MenuContainer.js';

const domContainer = document.getElementById('page-top');

const App = () => {
  return (
    <span>
      <Header />
      <MenuContainer />
    </span>
  );
};

ReactDOM.render(<Provider store={store}><App /></Provider>, domContainer);