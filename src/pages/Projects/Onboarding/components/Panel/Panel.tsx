import React from 'react';
import { PanelProps } from './Panel.types';
import { RootPanel } from './styled';

const Panel = ({ children, index, value, ...rest }: PanelProps) => (
  <RootPanel hidden={value !== index} {...rest}>
    {value === index && children}
  </RootPanel>
);

export default Panel;
