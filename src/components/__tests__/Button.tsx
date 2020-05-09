import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

describe('<Button/>', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Button>My Button</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should allow to pass custom CSS classes', () => {
    const { getByTestId } = render(
      <Button className="addition classes here">My Button</Button>,
    );
    const button = getByTestId('my-button');
    expect(button.getAttribute('class')).toContain('addition classes here');
  });
});
