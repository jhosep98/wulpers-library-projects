import React from 'react';
import { RouteObject } from 'react-router-dom';

import { HomePage } from 'pages';
import { AUTH_ROUTES } from 'helpers/routes';
import { PropertyPage } from 'pages/Projects/Filters/pages';
import { VideoSupportPage } from 'pages/Projects/Actions/pages';
import {
  ActionsPage,
  FiltersPage,
  OnboardingPage,
  PaymentsPage,
  SettingsPage,
} from 'pages/Projects';

export const routes: Array<RouteObject> = [
  {
    path: AUTH_ROUTES.home,
    element: <HomePage />,
  },
  {
    path: AUTH_ROUTES.projects_filters,
    element: <FiltersPage />,
  },
  {
    path: AUTH_ROUTES.project_filters_property,
    element: <PropertyPage />,
  },
  {
    path: AUTH_ROUTES.projects_settings,
    element: <SettingsPage />,
  },
  {
    path: AUTH_ROUTES.projects_onboarding,
    element: <OnboardingPage />,
  },
  {
    path: AUTH_ROUTES.projects_call_to_actions,
    element: <ActionsPage />,
  },
  {
    path: AUTH_ROUTES.projects_call_to_actions_video_support,
    element: <VideoSupportPage />,
  },
  {
    path: AUTH_ROUTES.projects_payments,
    element: <PaymentsPage />,
  },
];
