import React from 'react';
import { HeaderFlex } from '@wulperstudio/cms';
import { Breakpoint, Container, useTheme } from '@mui/material';

interface WrapperHeaderModel {
  backgroundColor?: string;
  children?: React.ReactNode | React.ReactNode[];
  sticky?: boolean;
  scrolled?: boolean;
  top?: number;
  maxWidth?: false | Breakpoint;
  isBorder?: boolean;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
}

export const WrapperHeader: React.FC<WrapperHeaderModel> = ({
  children,
  backgroundColor,
  scrolled,
  sticky,
  top = 0,
  isBorder,
  maxWidth = 'xxl',
  position,
}) => {
  const theme = useTheme();

  return (
    <HeaderFlex
      sticky={sticky}
      scrolled={scrolled}
      sx={{
        alignItems: 'center',
        display: 'flex',
        minHeight: 75,
        width: '100%',
        position,
        top,
        background: backgroundColor || theme.palette.background.default,
        boxSizing: 'border-box',
        zIndex: theme.zIndex.appBar,
        borderBottom: isBorder
          ? `1px solid ${theme.palette.divider}`
          : undefined,
      }}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </HeaderFlex>
  );
};
