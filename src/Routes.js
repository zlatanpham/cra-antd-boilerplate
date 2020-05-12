import React, { lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ROUTES from 'constants/routes';
import Dashboard from 'components/Dashboard';
import ComponentRoute from 'components/ComponentRoute';

const HomePage = lazy(() => import('pages/Home'));

export default function Routers() {
  return (
    <Router>
      <Dashboard path={ROUTES.DASHBOARD}>
        <ComponentRoute path={ROUTES.DASHBOARD} Component={HomePage} />
      </Dashboard>
    </Router>
  );
}
