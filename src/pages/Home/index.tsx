import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CardHome } from 'components';
import { HomeTemplate } from 'templates';
import { AUTH_ROUTES } from 'helpers/routes';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeTemplate>
        <CardHome
          title="Settings"
          description="lorem ipsum dolorem ingraten"
          button={{
            textButton: 'Go to settings',
            onClickButton: () => navigate(AUTH_ROUTES.projects_settings),
          }}
        />

        <CardHome
          title="Onboarding"
          description="lorem ipsum dolorem ingraten"
          button={{
            textButton: 'GO to onboarding',
            onClickButton: () => navigate(AUTH_ROUTES.projects_onboarding),
          }}
        />

        <CardHome
          title="Filters"
          description="lorem ipsum dolorem ingraten"
          button={{
            textButton: 'Go to filters',
            onClickButton: () => navigate(AUTH_ROUTES.projects_filters),
          }}
        />

        <CardHome
          title="Call Actions"
          description="lorem ipsum dolorem ingraten"
          button={{
            textButton: 'Go to Actions',
            onClickButton: () => navigate(AUTH_ROUTES.projects_call_to_actions),
          }}
        />

        <CardHome
          title="Payments"
          description="lorem ipsum dolorem ingraten"
          button={{
            textButton: 'Go to Payments',
            onClickButton: () => navigate(AUTH_ROUTES.projects_payments),
          }}
        />
      </HomeTemplate>
    </>
  );
};
