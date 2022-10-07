import React from 'react';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';

import { WrapperText, WrapperButton } from 'components';

interface ContentHeroManagerModel {
  title: string;
  description: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const ContentHeroManager: React.FC<ContentHeroManagerModel> = ({
  description,
  title,
  children,
}) => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          position: 'relative',
          zIndex: 15,
        }}
      >
        <Stack rowGap="90px">
          <Stack rowGap="50px" alignItems="center">
            <Stack rowGap="15px" alignItems="center">
              <Box>
                <WrapperText
                  text={title}
                  textAlign="center"
                  lineHeight="100px"
                  variant={isMqMd ? 'h2' : 'h1'}
                  component="h1"
                />
              </Box>

              <Box
                sx={{
                  maxWidth: 900,
                  [theme.breakpoints.down('md')]: {
                    maxWidth: 370,
                  },
                }}
              >
                <WrapperText
                  color={theme.palette.text.secondary}
                  text={description}
                  textAlign="center"
                  variant="body1"
                />
              </Box>
            </Stack>

            <WrapperButton
              sizeVariant="large"
              variant="contained"
              color="secondary"
              sx={{
                minWidth: 200,
                borderRadius: '50px',
              }}
            >
              Get started
            </WrapperButton>
          </Stack>
          {children}
        </Stack>
      </Box>
    </>
  );
};
