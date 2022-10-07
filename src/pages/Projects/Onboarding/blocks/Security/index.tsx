import React from 'react';
import { Icon } from '@iconify/react';
import { Box, CardActionArea, Stack, useTheme } from '@mui/material';
import {
  BoxContainer,
  CardFlexible,
  IconButtonComponent,
} from '@wulperstudio/cms';

import { WrapperText } from 'components';
import { ICONS_NAME } from 'helpers/icons';

export const Security: React.FC = () => {
  const theme = useTheme();

  return (
    <>
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
            <CardFlexible
              shadow="none"
              padding="0px"
              border={`1px solid ${theme.palette.background.paper}`}
            >
              <CardActionArea
                sx={{
                  p: '15px',
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack direction="row" alignItems="center" columnGap="15px">
                    <IconButtonComponent>
                      <Icon
                        icon={ICONS_NAME.users}
                        color={theme.palette.text.primary}
                      />
                    </IconButtonComponent>

                    <Box>
                      <WrapperText fontWeight={500} text="Title" />
                    </Box>
                  </Stack>

                  <IconButtonComponent>
                    <Icon
                      icon={ICONS_NAME.checkFilled}
                      color={theme.palette.success.main}
                    />
                  </IconButtonComponent>
                </Stack>
              </CardActionArea>
            </CardFlexible>
          </Stack>
        </Stack>
      </BoxContainer>
    </>
  );
};
