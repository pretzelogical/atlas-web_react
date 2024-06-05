import courseNormalizer from './courses.js';

const testData = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

test('Normalizes course data', () => {
  expect(courseNormalizer(testData).entities.courses['1'].name).toBe('ES6');
});
