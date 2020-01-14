import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';

it('renders Register Page Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <RegisterPage />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
