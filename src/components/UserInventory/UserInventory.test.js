import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserInventory from './UserInventory';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UserInventory />
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});