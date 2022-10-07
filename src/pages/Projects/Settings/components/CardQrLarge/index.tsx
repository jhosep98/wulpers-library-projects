import React from 'react';
import { CardFlexible } from '@wulperstudio/cms';
import { Box, Stack, useTheme } from '@mui/material';

import QrImage from 'assets/img/qr.png';
import { WrapperText } from 'components';

export const CardQrLarge: React.FC = () => {
  const theme = useTheme();
  return (
    <CardFlexible
      disabledHover
      shadow="none"
      padding="15px"
      border={`1px solid ${theme.palette.background.paper}`}
      sx={{
        maxWidth: 900,
        minHeight: 200,
        width: '100%',
        borderRadius: '20px',
        display: 'flex',
        columnGap: '25px',
        backgroundColor: theme.palette.background.default,
        padding: '15px',
        alignItems: 'center',
        boxShadow: theme.shadows[1],
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          minHeight: 200,
          background: `url(${QrImage}) no-repeat center center`,
          backgroundSize: 'cover',
          width: 250,
          margin: '0 auto',
          border: `1px solid ${theme.palette.background.paper}`,
          borderRadius: '20px',
        }}
      />

      <Stack rowGap="15px" width="100%" alignItems="flex-start">
        <Box>
          <WrapperText
            text="Experiencia Mobile 1st"
            variant="h2"
            fontWeight={600}
            maxWidth={400}
            gutterBottom
          />

          <WrapperText
            text="Escanea el QR e ingresa de tu dispositivo móvil. Si tienes un dispositivo iOS mira como dejar un acceso directo aquí. Y si tiene un dispositivo Android puedes verlo aquí."
            variant="body2"
            color="text.secondary"
            maxWidth={400}
          />
        </Box>
      </Stack>
    </CardFlexible>
  );
};
