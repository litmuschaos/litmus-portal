import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';

function customTheme(options) {
  return createMuiTheme({
    palette: {
      primary: {
        light: 'rgba(225, 226, 238, 0.88)',
        main: 'rgba(225, 226, 238)',
        dark: 'rgb(204, 208, 239)',
        contrastText: 'rgba(20, 47, 72, 0.95)',
      },
      secondary: {
        light: 'rgb(10, 55, 171)',
        main: 'rgb(54, 220, 200)',
        dark: 'rgba(20, 47, 72, 0.88)',
        contrastText: 'rgb(10, 55, 171)',
      },
      background: {
        paper: 'rgba(225, 226, 238)',
        default: 'rgb(255, 255, 255)',
      },
      text: {
        primary: 'rgba(20, 47, 72, 0.72)',
        secondary: 'rgba(20, 47, 72, 0.88)',
        disabled: 'rgba(20, 47, 72, 0.54)',
        hint: 'rgba(20, 47, 72, 0.54)',
      },
    },
    ...options,
  });
}

const theme = customTheme({});

export default function withTheme(Component) {
  function WithTheme(props) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }

  return WithTheme;
}
