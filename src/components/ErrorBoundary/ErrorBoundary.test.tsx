import * as React from 'react';
import ErrorBoundary from '.';
import { render } from '@testing-library/react';

describe('ErrorBoundary', () => {
  it('Should render children if no error was found', () => {
    const { getByTestId } = render(
      <ErrorBoundary>
        <div data-testid="children">Children fallback</div>
      </ErrorBoundary>,
    );
    expect(getByTestId('children').textContent).toBe('Children fallback');
  });

  it('Should render fallback if an error was catch', () => {
    const ErrorRenderComponent = () => {
      throw new Error('error');
    };

    const { getByTestId } = render(
      <ErrorBoundary
        fallback={<div data-testid="fallback">Error fallback</div>}
      >
        <ErrorRenderComponent />>
      </ErrorBoundary>,
    );
    expect(getByTestId('fallback').textContent).toBe('Error fallback');
  });

  it('should return null if an error was catch but no fallback is provided', () => {
    const ErrorRenderComponent = () => {
      throw new Error('error');
    };

    const { container } = render(
      <ErrorBoundary>
        <ErrorRenderComponent />
      </ErrorBoundary>,
    );

    expect(container.firstChild).toBeNull();
  });
});
