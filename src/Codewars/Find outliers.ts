export function findOutlier(integers: number[]): number {
  // Take the first 3 numbers and determine the majority parity
  const sample = integers.slice(0, 3);
  const evenCount = sample.filter(n => n % 2 === 0).length;
  const isMajorityEven = evenCount >= 2;

  // Return the first number that doesn't match the majority parity
  return integers.find(n => (n % 2 === 0) !== isMajorityEven)!;
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160

