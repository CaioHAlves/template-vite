import React from 'react';
import {
  MuiThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import tokens from './tokens.json';

const styles = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: tokens['token-brandcolor-primary-lightest'],
      main: tokens['token-brandcolor-primary-medium'],
      dark: tokens['token-brandcolor-primary-darkest'],
    },
    secondary: {
      light: tokens['token-brandcolor-secondary-lightest'],
      main: tokens['token-brandcolor-secondary-medium'],
      dark: tokens['token-brandcolor-secondary-darkest'],
    },
    error: {
      light: tokens['token-dangercolor-lightest'],
      main: tokens['token-dangercolor-medium'],
      dark: tokens['token-dangercolor-darkest'],
    },
    warning: {
      light: tokens['token-warningcolor-lightest'],
      main: tokens['token-warningcolor-medium'],
      dark: tokens['token-warningcolor-darkest'],
    },
    info: {
      light: tokens['token-infocolor-lightest'],
      main: tokens['token-infocolor-medium'],
      dark: tokens['token-infocolor-darkest'],
    },
    success: {
      light: tokens['token-successcolor-lightest'],
      main: tokens['token-successcolor-medium'],
      dark: tokens['token-successcolor-darkest'],
    },
    grey: {
      100: tokens['token-neutralcolor-light-100'],
      200: tokens['token-neutralcolor-light-200'],
      300: tokens['token-neutralcolor-light-300'],
      400: tokens['token-neutralcolor-light-400'],
      500: tokens['token-neutralcolor-light-500'],
      600: tokens['token-neutralcolor-light-600'],
      700: tokens['token-neutralcolor-dark-100'],
      800: tokens['token-neutralcolor-dark-200'],
      900: tokens['token-neutralcolor-dark-300'],
      A100: tokens['token-neutralcolor-dark-400'],
      A200: tokens['token-neutralcolor-dark-500'],
      A400: tokens['token-neutralcolor-dark-600'],
      A700: tokens['token-neutralcolor-dark-600'],
    },
  }
});

interface Props {
  children: React.ReactNode;
}

const Tema: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <MuiThemeProvider theme={styles}>
      {children}
    </MuiThemeProvider>
  );
};

export default Tema;
