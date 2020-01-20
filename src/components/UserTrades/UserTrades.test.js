import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserTrades from './UserTrades';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UserTrades />
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});