/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography } from '@mui/material';
import { GroupSelectorProps } from './GroupSelector.types';
import { RootGroupSelector, WrapperTitle, WrapperChilds } from './styled';

const GroupSelector = ({
  children,
  title,
  value,
  ...rest
}: GroupSelectorProps) => (
  <RootGroupSelector {...rest}>
    <WrapperTitle>
      <Typography component="h1" fontWeight={600} fontSize="25px">
        {title}
      </Typography>
    </WrapperTitle>
    <WrapperChilds>{children}</WrapperChilds>
  </RootGroupSelector>
);

export default GroupSelector;
