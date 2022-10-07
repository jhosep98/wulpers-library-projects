import React from 'react';
import { useTheme, Stack } from '@mui/material';
import { LayoutForm } from '@wulperstudio/cms';

export const Subscription: React.FC = () => {
  const theme = useTheme();

  return (
    <LayoutForm
      componentsProps={{
        BodyProps: {
          sx: {
            pb: '95px',
          },
        },
      }}
      body={(
        <Stack
          rowGap="15px"
          sx={{
            height: '100%',
            overflowY: 'auto',
            [theme.breakpoints.down('md')]: {
              paddingTop: '0px',
            },
          }}
        >
          CardHistory
        </Stack>
      )}
    />
  );
};
