import React from 'react';
import { SelectorProps } from './Selector.types';
import { RootSelector } from './styled';

const Selector = ({ children, ...rest }: SelectorProps) => (
  <RootSelector {...rest}>
    {children}
  </RootSelector>
);

export default Selector;
