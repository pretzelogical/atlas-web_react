import React from 'react';
import BodySection from './BodySection';
import { render, fireEvent, screen } from '@testing-library/react';


test('Component should correctly render the children and one h2 element', () => {
  render(
    <BodySection title="test title">
      <p role="paragraph">test children node</p>
    </BodySection>
  );
  const h2 = screen.getByRole('heading');
  const child = screen.getByRole('paragraph');

  expect(h2.textContent).toBe('test title');
  expect(child.textContent).toBe('test children node');
});