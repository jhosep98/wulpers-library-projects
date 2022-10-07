import React from 'react';
import { Icon } from '@iconify/react';
import { Divider, useTheme, Stack, useMediaQuery } from '@mui/material';
import { CardFlexible,
  TextForLinesOutput,
  Chip,
  IconButtonComponent,
  BoxContainer } from '@wulperstudio/cms';

import { WrapperButton } from 'components';

const ListOutputs: React.FC = () => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <BoxContainer
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <TextForLinesOutput
            clines={1}
            text="Jan 29"
            fontWeight="600"
            color={theme.palette.text.secondary}
            fontSize={isMqMd ? '14px' : '16px'}
          />
        </div>

        <Chip
          label="Paid"
          size="medium"
          chipProps={{
            sx: {
              backgroundColor: '#54D3AD26',
              color: '#54D3ADCC',
            },
          }}
        />

        <TextForLinesOutput
          clines={1}
          text="card"
          fontWeight="600"
          fontSize={isMqMd ? '14px' : '16px'}
          color={theme.palette.text.secondary}
        />

        <TextForLinesOutput
          clines={1}
          text="$180"
          fontSize={isMqMd ? '14px' : '16px'}
          fontWeight="600"
          color={theme.palette.text.primary}
        />

        <IconButtonComponent>
          <Icon
            icon="tabler:layout-kanban"
            color={theme.palette.primary.main}
          />
        </IconButtonComponent>
      </BoxContainer>

      <Divider
        variant="fullWidth"
        sx={{
          borderColor: theme.palette.background.paper,
        }}
      />
    </>
  );
};

export const CardBillingFinance: React.FC = () => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <CardFlexible padding={isMqMd ? '20px 15px' : '20px 30px'}>
      <Stack rowGap="10px">
        <ListOutputs />
        <ListOutputs />
        <ListOutputs />
        <ListOutputs />
        <ListOutputs />
        <Stack direction="row" justifyContent="center">
          <WrapperButton
            color="primary"
            type="button"
            variant="outlined"
          >
            See all
          </WrapperButton>
        </Stack>
      </Stack>
    </CardFlexible>
  );
};
