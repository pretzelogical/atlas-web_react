import React from 'react';
import { render, screen } from '@testing-library/react';
import WithLogging from './WithLogging.js';


test('Makes sure console.log is called on mount and unmount when wrapped component is pure HTML', () => {
  const htmlWithLogging = WithLogging(<p>Test</p>);
  render()
});