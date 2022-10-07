import React from 'react';
import { BoxLanding } from '@wulperstudio/cms';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';

import { ContentRowTemplate, HeroDesktopTemplate } from 'templates';
import { WrapperButton, WrapperText } from 'components';
import HeroImg from '../../assets/investments/Investments2.gif';

export const HeroBlock: React.FC = () => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <HeroDesktopTemplate id="hero" height="100vh">
        <ContentRowTemplate
          isMt={false}
          alignItems="center"
          flexDirectionMobile="column-reverse"
          firstBox={(
            <BoxLanding
              sx={{
                maxWidth: 600,
              }}
            >
              <Stack
                rowGap="40px"
                alignItems="center"
                justifyContent="center"
                maxWidth={700}
                minHeight={isMqMd ? 'auto' : 500}
              >
                <Stack
                  rowGap="20px"
                  alignItems="center"
                  sx={{
                    maxWidth: 700,
                  }}
                >
                  <WrapperText
                    component="h1"
                    variant="h1"
                    textAlign="center"
                    text={(
                      <>
                        <Box component="span" color="primary.main">
                          Changing
                        </Box>
                        {' '}
                        the way of funding
                      </>
                    )}
                  />

                  <WrapperText
                    variant="body2"
                    textAlign="center"
                    text="One platform, all the sector together."
                  />
                </Stack>

                <WrapperButton
                  variant="contained"
                  color="secondary"
                  sizeVariant="large"
                  sx={{ borderRadius: '15px', minWidth: 260, p: '8px 16px' }}
                >
                  Get started
                </WrapperButton>
              </Stack>
            </BoxLanding>
          )}
          secondBox={(
            <Box component="figure" sx={{ margin: 0, padding: 0 }}>
              <Box
                component="img"
                src={HeroImg}
                alt="hero img"
                sx={{ objectFit: 'cover', width: '100%' }}
              />
            </Box>
          )}
        />
      </HeroDesktopTemplate>
    </>
  );
};
