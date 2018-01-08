import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root'
import a11y from './helpers/a11y'

a11y(React, ReactDOM)

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
