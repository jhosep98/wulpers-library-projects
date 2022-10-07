import React from 'react';
import { Icon } from '@iconify/react';
import { IconButtonComponent } from '@wulperstudio/cms';
import { Container, Stack, useTheme } from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';
import { WrapperHeader } from 'components/WrapperHeader';
import { AlertContainer } from 'components/AlertContainer';
import { WrapperDrawerModal } from 'components/WrapperDrawerModal';

interface AlertModalModel {
  open: boolean;
  handleClose: () => void;
}

export const AlertModal: React.FC<AlertModalModel> = ({
  handleClose,
  open,
}) => {
  const theme = useTheme();

  return (
    <WrapperDrawerModal open={open} handleClose={handleClose}>
      <WrapperHeader sticky={false}>
        <Stack width="100%" direction="row" justifyContent="flex-end">
          <IconButtonComponent iconProps={{ onClick: handleClose }}>
            <Icon icon={ICONS_NAME.close} color={theme.palette.text.primary} />
          </IconButtonComponent>
        </Stack>
      </WrapperHeader>

      <Container>
        <AlertContainer
          title="Pago exitosamente"
          description="lorem ipsum dolorem ingraten lorem ipsum dolor"
          icon={(
            <Icon
              icon={ICONS_NAME.checkAnimated}
              color={theme.palette.success.main}
              width="100%"
              height="100%"
            />
          )}
          button={{
            text: 'Volver',
            onClick: () => handleClose,
          }}
          color="success"
        />
      </Container>

      <Stack rowGap="15px" height="100%" alignItems="center" />
    </WrapperDrawerModal>
  );
};
