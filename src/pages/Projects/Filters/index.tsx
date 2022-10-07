import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CardHome } from 'components';
import { HomeTemplate } from 'templates';
import { AUTH_ROUTES } from 'helpers/routes';

export const FiltersPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeTemplate>
        <CardHome
          title="Property"
          description="lorem ipsum dolorem ingraten"
          button={{
            textButton: 'Go to property',
            onClickButton: () => navigate(AUTH_ROUTES.project_filters_property),
          }}
        />
        <CardHome
          title="Jobs"
          description="lorem ipsum dolorem ingraten"
          button={{
            textButton: 'Go to jobs',
          }}
        />
        <CardHome
          title="Blogs"
          description="lorem ipsum dolorem ingraten"
          button={{
            textButton: 'Go to blogs',
          }}
        />
      </HomeTemplate>
    </>
  );
};
