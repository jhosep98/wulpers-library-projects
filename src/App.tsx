import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { setTheme } from 'theme';
import { AppRouter } from 'routes/AppRouter';

export const App: React.FC = () => {
  const { theme } = setTheme({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};
