import React from 'react';
import { Icon } from '@iconify/react';
import { HeaderFlex, IconButtonComponent } from '@wulperstudio/cms';
import { Container, Stack, Typography, useTheme } from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';

export const HeaderIconTextIcon: React.FC = () => {
  const theme = useTheme();

  return (
    <HeaderFlex
      sx={{
        alignItems: 'center',
        display: 'flex',
        minHeight: 75,
        width: '100%',
        background: theme.palette.background.default,
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButtonComponent
            iconProps={{
              sx: {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Icon
              icon={ICONS_NAME.back_chevron}
              color={theme.palette.text.primary}
            />
          </IconButtonComponent>

          <Typography>Header title</Typography>

          <IconButtonComponent
            iconProps={{
              sx: {
                padding: 0,
                backgroundColor: 'transparent',
              },
            }}
          >
            <Icon
              icon={ICONS_NAME.moreVertical}
              color={theme.palette.text.primary}
            />
          </IconButtonComponent>
        </Stack>
      </Container>
    </HeaderFlex>
  );
};
