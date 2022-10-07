import React from 'react';
import { Box, useTheme } from '@mui/material';
import { BoxContainer } from '@wulperstudio/cms';

import { WrapperText } from 'components/WrapperText';
import { WrapperButton } from 'components/WrapperButton';

interface AlertContainerModel {
  title?: React.ReactNode;
  description?: string;
  icon: React.ReactNode;
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  button: {
    text: string;
    onClick?: () => void;
  };
}

export const AlertContainer: React.FC<AlertContainerModel> = ({
  title,
  button,
  description,
  icon,
  color,
}) => {
  const theme = useTheme();

  return (
    <BoxContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '25px',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('md')]: {
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          padding: '40px 15px',
        },
      }}
    >
      <Box
        sx={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>

      <Box>
        <WrapperText
          text={title}
          variant="h1"
          textAlign="center"
          gutterBottom
          fontWeight={600}
        />

        <WrapperText
          variant="body1"
          color="text.secondary"
          textAlign="center"
          text={description}
        />
      </Box>

      <WrapperButton
        variant="contained"
        disableElevation
        fullWidth
        color={color}
        sizeVariant="large"
        sx={{ color: theme.palette.background.default }}
        onClick={() => button.onClick && button.onClick()}
      >
        {button.text}
      </WrapperButton>
    </BoxContainer>
  );
};
