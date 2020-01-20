import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TeamBoard from './TeamBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <TeamBoard />
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});