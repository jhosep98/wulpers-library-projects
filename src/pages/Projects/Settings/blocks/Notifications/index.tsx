import React from 'react';
import { useTheme } from '@mui/material';

import { WrapperButton } from 'components';
import { SectionSettingsTemplate } from 'templates';
import { InputTrueFalse } from '@wulperstudio/cms';

export const Notifications: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionSettingsTemplate
      body={(
        <>
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
        </>
      )}
      footer={(
        <WrapperButton fullWidth sizeVariant="large">
          Save Changes
        </WrapperButton>
      )}
    />
  );
};
