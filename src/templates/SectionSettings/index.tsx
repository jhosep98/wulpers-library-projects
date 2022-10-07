import React from 'react';
import { useTheme, Container } from '@mui/material';
import { BoxContainer, LayoutForm } from '@wulperstudio/cms';

interface SectionSettingsTemplateModel {
  body: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode;
}

export const SectionSettingsTemplate: React.FC<
  SectionSettingsTemplateModel
> = ({ body, footer }) => {
  const theme = useTheme();

  return (
    <LayoutForm
      componentsProps={{
        FooterProps: {
          sx: {
            position: {
              xs: 'fixed',
              md: 'static',
              left: 0,
            },
            bottom: {
              xs: '0px',
              md: 'unset',
            },
          },
        },
        BodyProps: {
          sx: {
            pb: footer ? '90px' : 0,
          },
        },
      }}
      body={(
        <Container>
          <BoxContainer
            component="form"
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'flex-start',
              overflowY: 'auto',
              rowGap: '15px',
              [theme.breakpoints.down('md')]: {
                paddingTop: '0px',
              },
            }}
          >
            {body}
          </BoxContainer>
        </Container>
      )}
      footer={
        footer ? (
          <Container
            sx={{
              width: '100%',
              py: '1rem',
              backgroundColor: theme.palette.background.default,
            }}
          >
            {footer}
          </Container>
        ) : undefined
      }
    />
  );
};
