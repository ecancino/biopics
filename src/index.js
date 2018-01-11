import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import 'react-day-picker/lib/style.css'

import Root from './containers/Root'
// import a11y from './helpers/a11y'
//
// a11y(React, ReactDOM)

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
