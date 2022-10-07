import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface WrapperTextModel extends Omit<TypographyProps, 'component'> {
  text: React.ReactNode;
  component?: React.ElementType;
}

export const WrapperText: React.FC<WrapperTextModel> = ({ ...props }) => {
  const { text, color = 'text.primary', component = 'p', ...rest } = props;

  return (
    <Typography color={color} {...rest} component={component}>
      {text}
    </Typography>
  );
};
