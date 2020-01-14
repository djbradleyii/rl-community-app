import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

it('renders Page Not Found Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
