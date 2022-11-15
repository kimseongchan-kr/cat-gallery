import sum from '../app';

test('1 더하기 2는 3이다.', () => {
  expect(sum(1, 2)).toBe(3);
});
