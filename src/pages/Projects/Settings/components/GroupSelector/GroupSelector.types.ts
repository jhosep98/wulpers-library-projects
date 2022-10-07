/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { RootGroupSelector } from './styled';

export interface GroupSelectorProps
  extends React.ComponentPropsWithRef<typeof RootGroupSelector> {
  title?: string;
  children?: React.ReactNode;
  value?: number;
}
