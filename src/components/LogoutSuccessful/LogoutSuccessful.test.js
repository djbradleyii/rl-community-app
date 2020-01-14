import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LogoutSuccessful from './LogoutSuccessful';

it('renders LogoutSuccessful Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
      <LogoutSuccessful />
      </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});