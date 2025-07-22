// sum.test.js
import { expect, it, test } from 'vitest';
import { sum } from './sum';

it('should return the correct sum if an array of number is provided', () => {
  //it — reads more naturally

  //Arrange
  const numbers = [1, 2, 3, 4, 5];
  const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);

  //Act
  const result = sum(numbers);

  //Assert
  expect(result).toBe(expectedResult);
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

it('it should provide NaN if at least one invalid number is provided', () => {
  //Arrange
  const numbers = [1, 2, 3, 4, 'invalid'];
  //Act
  const result = sum(numbers);
  console.log('🚀 ~ it ~ result:', result);
  //Assert
  expect(result).toBeNaN();
});

it('it should provide correct sum  if an array of numeric strings is provided', () => {
  //Arrange
  const numbers = ['1', '2', '3', '4', '5'];
  const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);

  //Act
  const result = sum(numbers);
  console.log('🚀 ~ it ~ result:', result);

  //Assert
  expect(result).toBe(expectedResult);
});
