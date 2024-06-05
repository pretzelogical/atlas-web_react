import {
  getFullYear,
  getFooterCopy,
  getLatestNotification
} from "./utils";


test('getFullYear gets the full year', () => {
  expect(getFullYear()).toBe((new Date()).getFullYear());
})

test('getFooterCopy returns the correct string', () => {
  expect(getFooterCopy(true)).toBe('Holberton School')
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
})

test('getLatestNotification returns the correct string', () => {
  expect(getLatestNotification())
    .toBe(`<strong>Urgent requirement</strong> - complete by EOD`);
})