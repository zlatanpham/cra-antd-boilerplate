import React from 'react';
import { render } from '@testing-library/react';
import ComponentRoute from '.';
import { RouteProps } from 'react-router-dom';

const ValidPage: React.FunctionComponent<RouteProps> = () => {
  return <div data-testid="valid-component" />;
};

const InvalidPage: React.FunctionComponent<RouteProps> = () => {
  throw Error('error');
};

describe('<ComponentRoute/>', () => {
  it('Should render Component if no error thrown', () => {
    const { getByTestId } = render(
      <ComponentRoute path="/" Component={ValidPage} />,
    );
    expect(getByTestId('valid-component')).toBeDefined();
  });

  it('Should render Alert if error thrown', () => {
    const { getByText } = render(
      <ComponentRoute path="/" Component={InvalidPage} />,
    );
    expect(getByText('Looks like something broke...')).toBeDefined();
  });
});
