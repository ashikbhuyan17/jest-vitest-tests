// sum.js
export function sum(numbers: any[]): number {
  let sum = 0;
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
