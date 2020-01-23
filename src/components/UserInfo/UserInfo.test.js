import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserInfo from './UserInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UserInfo />
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});