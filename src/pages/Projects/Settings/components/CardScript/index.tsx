import React from 'react';
import { Icon } from '@iconify/react';
import { Box, Stack, useTheme } from '@mui/material';
import { CardFlexible, IconButtonComponent } from '@wulperstudio/cms';

import { ICONS_NAME } from 'helpers/icons';
import { WrapperSubtitleSection } from '../WrapperSubtitleSection/index';

export const CardScript: React.FC = () => {
  const theme = useTheme();

  return (
    <CardFlexible
      shadow="none"
      border={`1px solid ${theme.palette.background.paper}`}
      sx={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}
    >
      <Stack direction="row" justifyContent="space-between">
        <WrapperSubtitleSection text="Banner" />

        <IconButtonComponent
          iconProps={{
            sx: {
              boxShadow: theme.shadows[1],
            },
          }}
        >
          <Icon icon={ICONS_NAME.link2} color={theme.palette.primary.main} />
        </IconButtonComponent>
      </Stack>

      <Box
        component="textarea"
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: '15px',
          width: '100%',
          minHeight: 400,
          border: 'none',
        }}
      />
    </CardFlexible>
  );
};
