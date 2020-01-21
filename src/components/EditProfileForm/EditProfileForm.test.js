import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditProfileForm from './EditProfileForm';

it.only('renders EditProfileForm Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
       <EditProfileForm />
      </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
