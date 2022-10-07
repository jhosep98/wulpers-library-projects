import React from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { CardFlexible } from '@wulperstudio/cms';
import { WrapperButton, WrapperText } from 'components';

interface CardHomeModel {
  title: string;
  description: string;
  button: {
    textButton: string;
    onClickButton?: () => void;
  };
}

export const CardHome: React.FC<CardHomeModel> = ({
  button,
  description,
  title,
}) => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <CardFlexible
      disabledHover
      padding="20px"
      border={`1px solid ${theme.palette.divider}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'none',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        padding: isMqMd ? '2rem 1rem' : '2rem',
        minHeight: 'fit-content',
        borderRadius: '20px',
        minWidth: '100%',
        '&:hover': {
          boxShadow: isMqMd ? 'none' : theme.shadows[1],
          zIndex: 10,
        },
        [theme.breakpoints.down('md')]: {
          '&:hover': {
            zIndex: 0,
            borderRadius: 0,
          },
        },
      }}
    >
      <Stack alignItems="center" rowGap="25px">
        <WrapperText textAlign="center" variant="h4" text={title} />

        <WrapperText textAlign="center" variant="body1" text={description} />

        <WrapperButton
          variant="contained"
          size="large"
          color="primary"
          fullWidth
          onClick={button.onClickButton}
        >
          {button.textButton}
        </WrapperButton>
      </Stack>
    </CardFlexible>
  );
};
