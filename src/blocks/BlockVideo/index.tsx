import React from 'react';
import { Box } from '@mui/material';
import { ContainerTemplate } from 'templates';

interface BlockVideoModel {
  children: React.ReactNode;
}

export const BlockVideo: React.FC<BlockVideoModel> = ({ children }) => (
  <ContainerTemplate sx={{ py: 0 }}>
    <Box
      sx={{
        padding: '15px',
        position: 'relative',
        width: '100%',
        margin: 'auto',
        borderRadius: '16px',
        background:
          'linear-gradient(179.88deg, #8156FE 0.11%, rgba(129, 86, 254, 0) 61.34%)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',

          '&::before': {
            content: '" "',
            display: 'block',
            paddingBottom: '56.25%',
          },

          '& iframe': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  </ContainerTemplate>
);
