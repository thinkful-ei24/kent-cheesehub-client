import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list'

ReactDOM.render(
  <CheeseList cheeses={[
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
  ]}/>
  , document.getElementById('root')
);
