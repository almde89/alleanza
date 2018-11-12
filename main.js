import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from "./components/widgets/Header";

const domContainer = document.querySelector('#root');
ReactDOM.render(<Header />, domContainer);