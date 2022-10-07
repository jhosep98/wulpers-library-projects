import React from 'react';
import { Container, Stack, useTheme } from '@mui/material';
import { HeaderFlex, MenuResponsive } from '@wulperstudio/cms';

import { WrapperButton } from 'components/WrapperButton';

interface IconsPropsModel {
  icon: React.ReactNode;
  text: string;
  toRoute?: () => void;
  active?: boolean;
}

interface HeaderMobileModel {
  listItems?: Array<IconsPropsModel>;
  handleMenuOpen?: () => void;
  children?: React.ReactNode | React.ReactNode[];
  openMenu?: boolean;
}

export const HeaderMobile: React.FC<HeaderMobileModel> = ({
  listItems,
  children,
  handleMenuOpen,
  openMenu,
}) => {
  const theme = useTheme();

  return (
    <HeaderFlex
      sx={{
        minHeight: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 15,
      }}
    >
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <MenuResponsive
            options={listItems}
            handleMenuOpen={handleMenuOpen}
            openMenu={openMenu}
            isChildren
            drawerProps={{
              PaperProps: {
                sx: {
                  width: '100%',
                  backgroundColor: theme.palette.background.default,
                },
              },
            }}
          >
            {children}
          </MenuResponsive>

          <Stack direction="row" alignItems="center">
            <WrapperButton
              sizeVariant="small"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.primary.main,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: theme.palette.background.default,
                },
              }}
            >
              Get started
            </WrapperButton>
          </Stack>
        </Stack>
      </Container>
    </HeaderFlex>
  );
};
