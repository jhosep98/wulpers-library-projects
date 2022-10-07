import React from 'react';
import { Box } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import { routes } from './routesPage';

export const AppRouter: React.FC = () => {
  const element = useRoutes(routes);

  return <Box component="main">{element}</Box>;
};
