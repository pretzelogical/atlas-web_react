import React from 'react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom.js';
import { render, screen } from '@testing-library/react';
import { shallow } from '../../config/setupTests.mjs';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


test('Checks that the component correctly renders a BodySection component', () => {
  const wrapper = shallow(
    <BodySectionWithMarginBottom title="test title">
      <p role='paragraph'>test children node</p>
    </BodySectionWithMarginBottom>
  );
  const bodySection = wrapper.find('BodySection');

  expect(bodySection.exists()).toBe(true);
});

test('Checks that the component correctly passes props to BodySection component', () => {
  const wrapper = shallow(
    <BodySectionWithMarginBottom title="test title">
      <p role='paragraph'>test children node</p>
    </BodySectionWithMarginBottom>
  );
  const bodySection = wrapper.find('BodySection');
  const p = wrapper.find('p');

  expect(bodySection.props().title).toBe('test title');
  expect(p.text()).toBe('test children node');
});
