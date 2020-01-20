import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserTeamRequests from './UserTeamRequests';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UserTeamRequests />
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});