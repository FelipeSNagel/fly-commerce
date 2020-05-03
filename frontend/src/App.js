import React from 'react';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import { useSelector } from 'react-redux';
import './config/ReactotronConfig';

import GlobalStyles from './styles/global';
import { lightTheme, darkTheme } from './themes/theme';

import Routes from './routes';
import history from './services/history';

function App() {
  const theme = useSelector(state => state.theme.theme);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router history={history}>
      <ThemeProvider theme={themeMode}>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
