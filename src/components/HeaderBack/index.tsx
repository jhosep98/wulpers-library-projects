import React from 'react';
import { Icon } from '@iconify/react';
import { Stack, useTheme } from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';
import { useNavigate } from 'react-router-dom';
import { WrapperHeader, WrapperIconButton } from 'components';

export const HeaderBack: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <WrapperHeader isBorder>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <WrapperIconButton
          iconProps={{
            title: 'back',
            onClick: () => navigate(-1),
          }}
        >
          <Icon
            icon={ICONS_NAME.back_chevron}
            color={theme.palette.text.primary}
          />
        </WrapperIconButton>

        <WrapperIconButton>
          <Icon icon={ICONS_NAME.avatar} color={theme.palette.text.primary} />
        </WrapperIconButton>
      </Stack>
    </WrapperHeader>
  );
};
