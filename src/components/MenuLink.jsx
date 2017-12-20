import React from 'react'
import { Link } from 'react-router'
import { css } from 'aphrodite';

import MenuItem from 'material-ui/MenuItem';

import styles from '../styles';

export default ({ to, children }) => <MenuItem>
  <Link to={to} className={css(styles.menuItem)} activeClassName={css(styles.activeMenuItem)}>
    {children}
  </Link>
</MenuItem>
