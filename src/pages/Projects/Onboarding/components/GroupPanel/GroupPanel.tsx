import React from 'react';
import { GroupPanelProps } from './GroupPanel.types';
import { RootGroupPanel } from './styled';

const GroupPanel = (props: GroupPanelProps) => <RootGroupPanel {...props} />;

export default GroupPanel;
