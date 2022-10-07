import React from 'react';

import {
  Account,
  History,
  Notifications,
  Security,
  Subscription,
  TermsAndConditions,
} from '../blocks';

export const SectionLabels = (): string[] => [
  'Información de cuenta',
  'Seguridad',
  'Planes de suscripción',
  'Notificaciones',
  'Historial',
  'Términos y Condiciones',
];

export const SectionChilds = (): React.ReactNode[] => [
  <Account key="account" />,
  <Security key="security" />,
  <Subscription key="subscription" />,
  <Notifications key="notifications" />,
  <History key="history" />,
  <TermsAndConditions key="terms" />,
];
