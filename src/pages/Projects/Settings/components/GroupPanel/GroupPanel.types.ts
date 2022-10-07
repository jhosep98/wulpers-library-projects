/* eslint-disable @typescript-eslint/naming-convention */
import React, { ReactNode } from 'react';
import { RootGroupPanel } from './styled';

export interface GroupPanelProps
  extends React.ComponentPropsWithRef<typeof RootGroupPanel> {
  children?: ReactNode;
}
