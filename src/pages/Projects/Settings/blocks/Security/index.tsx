import React from 'react';
import { Box } from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';
import { useDrawer } from 'hooks/useDrawer';
import { SectionSettingsTemplate } from 'templates';
import { AlertModal, WrapperButton, WrapperText } from 'components';
import { ListItem } from '../../components';

export const Security: React.FC = () => {
  const { showDrawer, handleCloseDrawer, handleOpenDrawer } = useDrawer<'alert'>(['alert']);

  const { alert } = showDrawer;

  return (
    <SectionSettingsTemplate
      body={(
        <>
          <Box>
            <WrapperText
              text="Take a selfie"
              variant="h2"
              fontWeight={600}
              gutterBottom
            />

            <WrapperText text="We´ll compare it with your document" />
          </Box>

          <ListItem
            items={[
              {
                icon: ICONS_NAME.face,
                item: 'Face forward and make sure your eyes are clearly visible.',
              },
              {
                icon: ICONS_NAME.glasses,
                item: 'Remove your glasses, if necessary.',
              },
            ]}
          />

          {alert && (
            <AlertModal
              open={alert}
              handleClose={() => handleCloseDrawer('alert')}
            />
          )}
        </>
      )}
      footer={(
        <WrapperButton
          fullWidth
          sizeVariant="large"
          onClick={() => handleOpenDrawer('alert')}
        >
          Comenzar
        </WrapperButton>
      )}
    />
  );
};
