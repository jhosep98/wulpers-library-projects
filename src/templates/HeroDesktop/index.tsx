import React from 'react';
import { useTheme } from '@mui/material';
import { BoxLanding, Hero } from '@wulperstudio/cms';

interface HeroDesktopTemplateModel {
  children?: React.ReactNode | React.ReactNode[];
  image?: string;
  justifyContent?: string;
  backgroundColor?: string;
  height?: string;
  header?: React.ReactNode;
  backgroundSize?: string;
  backgroundPosition?: string,
  id?: string;
}

export const HeroDesktopTemplate: React.FC<HeroDesktopTemplateModel> = ({
  children,
  justifyContent,
  backgroundColor,
  image,
  height,
  header,
  backgroundSize = 'contain',
  backgroundPosition = 'center center',
  id,
}) => {
  const theme = useTheme();

  return (
    <Hero
      id={id}
      header={header}
      sx={{
        height: height || 'calc(100vh - 90px)',
        minHeight: 'auto',
        background: 'linear-gradient(180deg, #F7F7FD 0%, #FFFFFF 100%);',
        backgroundColor,
        ...(image && {
          backgroundImage: `url(${image})`,
          backgroundSize,
          backgroundPosition,
          backgroundRepeat: 'no-repeat',
        }),
        [theme.breakpoints.down('md')]: {
          dislay: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <BoxLanding
        sx={{
          width: '100%',
          display: 'flex',
          height: '100%',
          justifyContent: justifyContent || 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </BoxLanding>
    </Hero>
  );
};
