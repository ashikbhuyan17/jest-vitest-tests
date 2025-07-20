// sum.test.js
import { expect, it, test } from 'vitest';
import { sum } from './sum';

it('should return the correct sum if an array of number is provided', () => {
  //it — reads more naturally
  const result = sum([1, 3, 5]);
  expect(result).toBe(9);
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
