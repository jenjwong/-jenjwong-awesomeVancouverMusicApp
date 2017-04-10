import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { BrowserRouter } from 'react-router';

render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById('root')
);
