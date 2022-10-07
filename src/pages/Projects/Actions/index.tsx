import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CardHome } from 'components';
import { HomeTemplate } from 'templates';
import { AUTH_ROUTES } from 'helpers/routes';

export const ActionsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeTemplate>
        <CardHome
          title="Video Support"
          description="lorem ipsum dolorem ingraten"
          button={{
            textButton: 'Go to video support',
            onClickButton: () => navigate(AUTH_ROUTES.projects_call_to_actions_video_support),
          }}
        />
      </HomeTemplate>
    </>
  );
};
