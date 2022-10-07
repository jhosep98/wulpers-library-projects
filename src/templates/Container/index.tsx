import React from 'react';
import { Container, ContainerProps } from '@mui/material';

interface ContainerTemplateModel extends Omit<ContainerProps, 'component'> {
  component?: React.ElementType;
}

export const ContainerTemplate: React.FC<ContainerTemplateModel> = ({
  children,
  ...props
}) => {
  const { maxWidth = 'xl', component = 'section', sx, ...rest } = props;

  return (
    <Container
      sx={{ py: '70px', width: '100%', ...sx }}
      component={component}
      maxWidth={maxWidth}
      {...rest}
    >
      {children}
    </Container>
  );
};
