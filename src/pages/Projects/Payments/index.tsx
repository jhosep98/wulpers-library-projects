import React from 'react';

import { CardHome } from 'components';
import { HomeTemplate } from 'templates';

export const PaymentsPage: React.FC = () => (
  <HomeTemplate>
    <CardHome
      title="Payments Web"
      description="lorem ipsum dolorem ingraten"
      button={{
        textButton: 'Go to Payments web',
        // onClickButton: () => navigate(AUTH_ROUTES.projects_filters),
      }}
    />
    <CardHome
      title="Payments Cms"
      description="lorem ipsum dolorem ingraten"
      button={{
        textButton: 'Go to payments Cms',
        // onClickButton: () => navigate(AUTH_ROUTES.projects_filters),
      }}
    />
  </HomeTemplate>
);
