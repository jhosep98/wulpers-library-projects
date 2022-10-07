/* eslint-disable @typescript-eslint/naming-convention */
import React, { ReactNode } from 'react';
import { RootSelector } from './styled';

export interface SelectorProps
  extends React.ComponentPropsWithRef<typeof RootSelector> {
  active?: boolean;
  children?: ReactNode;
}
