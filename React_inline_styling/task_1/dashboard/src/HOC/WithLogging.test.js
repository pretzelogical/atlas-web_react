import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Login/Login.js';
import { jest } from '../../config/setupTests.mjs';
import WithLogging from './WithLogging.js';

let consoleLogMock;

beforeEach(() => {
  consoleLogMock = jest.spyOn(console, 'log')
    .mockImplementation(() => void(0));
});

afterEach(() => {
  consoleLogMock.mockRestore();
});

test('Make sure console.log is called on mount and unmount when wrapped component is pure HTML', () => {
  const HtmlWithLogging = WithLogging(() => <p>Test</p>);
  const { unmount } = render(<HtmlWithLogging />);
  unmount();

  expect(consoleLogMock.mock.calls).toEqual([
    ['Component Component is mounted'],
    ['Component Component is going to unmount']
  ]);
});

test('Make sure console.log is called on mount and unmount with Login Component', () => {
  const LoginWithLogging = WithLogging(Login);
  const { unmount } = render(<LoginWithLogging />);
  unmount();

  expect(consoleLogMock.mock.calls).toEqual([
    ['Component Login is mounted'],
    ['Component Login is going to unmount']
  ]);
});
