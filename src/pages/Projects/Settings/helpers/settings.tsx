import React from 'react';

import {
  Account,
  Preferences,
  Notifications,
  Security,
  Finance,
  Payments,
  Integrations,
  InstallApp,
  UseCases,
  Support,
} from '../blocks';

export const SectionLabels = (): string[] => [
  'Account',
  'Identify validation',
  'Finance',
  'Notifications',
  'Preferences',
  'Payments',
  'Integrations',
  'Install App',
  'Use cases',
  'Support',
];

export const SectionChilds = (): React.ReactNode[] => [
  <Account key="account" />,
  <Security key="identifyValidation" />,
  <Finance key="finance" />,
  <Notifications key="notifications" />,
  <Preferences key="preferences" />,
  <Payments key="payments" />,
  <Integrations key="integrations" />,
  <InstallApp key="installApp" />,
  <UseCases key="useCases" />,
  <Support key="support" />,
];
