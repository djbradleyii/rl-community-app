import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AccountCreated from './AccountCreated';

it('renders AccountCreated Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
      <AccountCreated />
      </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
