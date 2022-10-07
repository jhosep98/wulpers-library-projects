import React from 'react';
import { Hero } from '@wulperstudio/cms';
import { BoxProps, useTheme } from '@mui/material';

import { ContentRowTemplate } from 'templates/ContentRow';

interface HeroMobileTemplateModel extends BoxProps {
  firstBox: React.ReactNode;
  secondBox: React.ReactNode;
  background?: string;
  widthFirstBox?: string | number;
  widthSecondBox?: string | number;
  height?: string;
  backgroundSize?: string;
  backgroundColor?: string;
  gap?: string;
  header: React.ReactNode;
}

export const HeroMobileTemplate: React.FC<HeroMobileTemplateModel> = ({
  firstBox,
  secondBox,
  background,
  widthFirstBox,
  widthSecondBox,
  height = '100vh',
  backgroundSize = 'cover',
  backgroundColor,
  gap = '30px',
  header,
}) => {
  const theme = useTheme();

  return (
    <Hero
      header={header}
      sx={{
        height,
        backgroundColor,
        position: 'relative',
        background: 'linear-gradient(176.75deg, #FBFBFF 10.61%, #EAECFD 98.76%)',
        ...(background && {
          backgroundImage: `url(${background})`,
          backgroundSize,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }),
        [theme.breakpoints.down('md')]: {
          dislay: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <ContentRowTemplate
        firstBox={firstBox}
        secondBox={secondBox}
        widthFirstBox={widthFirstBox}
        widthSecondBox={widthSecondBox}
        flexDirection="column"
        sx={{
          gap,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: '75px',
          pt: '165px',
          [theme.breakpoints.down('md')]: {
            py: '0px',
          },
        }}
      />
    </Hero>
  );
};
