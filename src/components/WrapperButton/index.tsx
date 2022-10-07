import React from 'react';
import { Button, ButtonModel } from '@wulperstudio/cms';

type ISizeVariant = 'small' | 'medium' | 'large';

type ISizeButton = {
  [K in ISizeVariant]: string;
};

interface WrapperButtonModel extends ButtonModel {
  sizeVariant?: ISizeVariant;
}

const sizeButton: ISizeButton = {
  small: '46px',
  medium: '52px',
  large: '56px',
};

export const WrapperButton: React.FC<WrapperButtonModel> = ({
  children,
  sizeVariant = 'small',
  sx,
  ...props
}) => {
  const { variant = 'contained', color = 'primary', ...rest } = props;

  return (
    <Button
      color={color}
      disableElevation
      variant={variant}
      sx={{
        borderRadius: '15px',
        minHeight: sizeButton[sizeVariant],
        fontSize: '16px',
        fontWeight: 700,
        px: '1rem',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
