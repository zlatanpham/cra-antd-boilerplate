import React from 'react';
import { RouteProps } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary';

export interface ComponentRouteProps extends RouteProps {
  Component: React.FunctionComponent<RouteProps>;
}

const ComponentRoute = ({ Component, ...rest }: ComponentRouteProps) => {
  return (
    <ErrorBoundary>
      <Component {...rest} />
    </ErrorBoundary>
  );
};

export default ComponentRoute;
