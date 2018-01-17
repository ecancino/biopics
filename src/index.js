import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import 'react-widgets/dist/css/react-widgets.css'

import Root from './containers/Root'

// import a11y from './helpers/a11y'
import localizer from 'react-widgets-dates'

// a11y(React, ReactDOM)
localizer()

ReactDOM.render(<Root />, document.querySelector('#root'));
