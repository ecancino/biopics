import React from 'react'
import { css } from 'aphrodite';

import Paper from 'material-ui/Paper';

import Menu from '../../components/Menu'
import styles from '../../styles';

export default ({ children }) => (
  <div>
    <Menu />
    <Paper className={css(styles.appContainer)}>{ children }</Paper>
  </div>
)
