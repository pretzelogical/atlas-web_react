import React from "react";
import NotificationItem from "./NotificationItem.js";
import { shallow } from "../../config/setupTests.mjs";
import { fireEvent, render, screen } from "@testing-library/react";
import { jest } from "../../config/setupTests.mjs";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('NotificationItem renders', () => {
  const wrapper = shallow(<NotificationItem
    value={'test'}
    type={'basic'}
  />);
  expect(wrapper.exists()).toBe(true);
});

test('NotificationItem renders the right html', async () => {
  render(
    <NotificationItem
      html={{ __html: '<p role="paragraph">Test</p>' }}
      type='basic'
    />
  );
  const p = await screen.findByRole('paragraph');

  expect(p.outerHTML).toBe('<p role="paragraph">Test</p>');
});


test('NotificationItem calls markAsRead when clicked on', () => {
  const spyMarkAsRead = jest.fn();
  render(<NotificationItem value={'test'} type={'basic'} markAsRead={spyMarkAsRead} />);
  const li_elems = screen.getAllByRole('listitem');

  li_elems.forEach((li) => {
    fireEvent.click(li);
  });

  expect(spyMarkAsRead).toHaveBeenCalled();
});


test('NotificationItem calls markAsRead with correct id argument when clicked on', () => {
  const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => void(0));
  render(<NotificationItem value={'test'} type={'basic'} markAsRead={() => console.log('ID')} />);
  const li_elems = screen.getAllByRole('listitem');

  li_elems.forEach((li) => {
    fireEvent.click(li);
  });

  expect(mockConsoleLog).toHaveBeenCalledWith('ID');
});
