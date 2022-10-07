import React from 'react';
import { CardFlexible, LayoutForm } from '@wulperstudio/cms';
import { useTheme, Stack, Typography } from '@mui/material';

export interface CardHistoryModel {
  title: string;
  date?: string;
  description: string;
}

export const CardHistory: React.FC<CardHistoryModel> = ({
  date,
  description,
  title,
}) => {
  const theme = useTheme();

  return (
    <CardFlexible
      shadow={theme.shadows[0]}
      padding="0px"
      sx={{
        border: `1px solid ${theme.palette.background.paper}`,
        borderRadius: '15px',
        minWidth: 'min-content',
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography
          color="primary.main"
          variant="body1"
          fontWeight={600}
          gutterBottom
        >
          {title}
        </Typography>

        <Stack direction="row" alignItems="center" columnGap="5px">
          {date && (
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          )}
        </Stack>
      </Stack>

      <Typography color="text.secondary" variant="body2">
        {description}
      </Typography>
    </CardFlexible>
  );
};

export const History: React.FC = () => {
  const theme = useTheme();

  return (
    <LayoutForm
      componentsProps={{
        BodyProps: {
          sx: {
            pb: '95px',
          },
        },
      }}
      body={(
        <Stack
          rowGap="15px"
          sx={{
            height: '100%',
            overflowY: 'auto',
            [theme.breakpoints.down('md')]: {
              paddingTop: '0px',
            },
          }}
        >
          <CardHistory
            title="Prueba de vida otorgada"
            description="Ana Sánchez ha validado la prueba de vida por ti mediante un SMS y control biométrico"
            date="hoy 9:41"
          />
          <CardHistory
            title="Prueba de vida otorgada"
            description="Ana Sánchez ha validado la prueba de vida por ti mediante un SMS y control biométrico"
            date="hoy 9:41"
          />
          <CardHistory
            title="Prueba de vida otorgada"
            description="Ana Sánchez ha validado la prueba de vida por ti mediante un SMS y control biométrico"
            date="hoy 9:41"
          />
          <CardHistory
            title="Prueba de vida otorgada"
            description="Ana Sánchez ha validado la prueba de vida por ti mediante un SMS y control biométrico"
            date="hoy 9:41"
          />
        </Stack>
      )}
    />
  );
};
