import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Paper from 'material-ui/Paper';

export default ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Paper zDepth={3}>{children}</Paper>
  </MuiThemeProvider>
)
