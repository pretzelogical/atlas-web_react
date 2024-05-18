import React from 'react';
import { shallow } from "../../config/setupTests.mjs";
import Footer from './Footer.js';


test('Footer renders', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.exists()).toBe(true);
});


test('Footer at the very least renders the text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.html().toLowerCase().includes('copyright')).toBe(true);
});