import React from 'react';
import { CardFlexible } from '@wulperstudio/cms';
import { Box, Grid, useTheme } from '@mui/material';

import { consts } from 'helpers/consts';
import { ContainerTemplate } from 'templates';
import { WrapperButton, WrapperText } from 'components';

export const UseCases: React.FC = () => {
  const theme = useTheme();

  return (
    <ContainerTemplate sx={{ py: '25x' }}>
      <CardFlexible
        shadow="none"
        border={`1px solid  ${theme.palette.background.paper}`}
      >
        <Grid container direction="column" rowGap="15px">
          <Grid item xs>
            <WrapperText
              text="Contrato de locacion para Sevilla"
              variant="h4"
              component="h2"
            />
          </Grid>

          <Grid item xs sx={{ height: '15rem' }}>
            <Box
              component="img"
              src={consts.backgroundImageRandom}
              alt="random-image"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Grid>

          <Grid item xs>
            <WrapperText
              text="lorem ipsum dolrem ingraten, lorem ipsum dolorem ingraten."
              variant="body1"
              color="text.secondary"
            />
          </Grid>

          <Grid item xs>
            <WrapperButton color="primary" variant="contained" fullWidth>
              Save
            </WrapperButton>
          </Grid>
        </Grid>
      </CardFlexible>
    </ContainerTemplate>
  );
};
