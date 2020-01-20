import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import InventoryForm from './InventoryForm';

it('renders Landing Page Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
       <InventoryForm />
      </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});