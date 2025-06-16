// You have to create a function which receives 3 number arguments: 2 operands a and b,
// and the result of an unknown operation performed on them.
// Based on those 3 values you have to return a string, that describes which operation 
// was used to get the given result.
// The possible return strings are: "addition", "subtraction", "multiplication", "division".

// Examples:
// (a = 1, b = 2, result = 3)   --> 1 ? 2 = 3   --> "addition"
// (a = 5, b = 2, result = 2.5) --> 5 ? 2 = 2.5 --> "division"

export function calcType(a: number, b: number, res: number): string {
  if (a + b === res) return 'addition';
  if (a - b === res) return 'subtraction';
  if (a * b === res) return 'multiplication';
  if (a / b === res) return 'division';
  
  throw new Error('Unknown operation');
}