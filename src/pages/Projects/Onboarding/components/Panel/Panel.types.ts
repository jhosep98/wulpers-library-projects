import React, { ReactNode } from 'react';
import { RootPanel } from './styled';

/* eslint-disable @typescript-eslint/naming-convention */
export interface PanelProps extends
  React.ComponentPropsWithoutRef<typeof RootPanel> {
  children?: ReactNode;
  index: number;
  value: number;
}
