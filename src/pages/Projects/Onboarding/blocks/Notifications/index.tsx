import React from 'react';
import { Stack, useTheme } from '@mui/material';

import { WrapperButton } from 'components';
import { BoxContainer, InputTrueFalse } from '@wulperstudio/cms';

export const Notifications: React.FC = () => {
  const theme = useTheme();

  return (
    <BoxContainer
      sx={{
        padding: 0,
        height: '100%',
      }}
    >
      <Stack
        rowGap="15px"
        sx={{
          height: '100%',
          overflow: 'auto',
        }}
      >
        <Stack rowGap="15px">
          <InputTrueFalse
            label="Notifications"
            labelPlacement="start"
            sx={{
              alignItems: 'center',
              border: `1px solid ${theme.palette.background.paper}`,
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '.5rem .2rem .5rem 1rem',
              width: '100%',
            }}
          />

          <InputTrueFalse
            label="Notifications"
            labelPlacement="start"
            sx={{
              alignItems: 'center',
              border: `1px solid ${theme.palette.background.paper}`,
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '.5rem .2rem .5rem 1rem',
              width: '100%',
            }}
          />

          <InputTrueFalse
            label="Notifications"
            labelPlacement="start"
            sx={{
              alignItems: 'center',
              border: `1px solid ${theme.palette.background.paper}`,
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '.5rem .2rem .5rem 1rem',
              width: '100%',
            }}
          />

          <InputTrueFalse
            label="Notifications"
            labelPlacement="start"
            sx={{
              alignItems: 'center',
              border: `1px solid ${theme.palette.background.paper}`,
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '.5rem .2rem .5rem 1rem',
              width: '100%',
            }}
          />
        </Stack>

        <BoxContainer
          sx={{
            width: '100%',
            padding: '10px 15px',
            [theme.breakpoints.down('md')]: {
              position: 'fixed',
              bottom: 0,
              right: 0,
              left: 0,
              padding: '10px',
              backgroundColor: theme.palette.background.default,
            },
          }}
        >
          <WrapperButton
            fullWidth
            variant="contained"
            type="submit"
          >
            Guardar cambios
          </WrapperButton>
        </BoxContainer>
      </Stack>
    </BoxContainer>
  );
};
