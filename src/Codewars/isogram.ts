// An isogram is a word that has no repeating letters,
//  consecutive or non-consecutive. Implement a function that determines whether 
//  a string that contains only letters is an isogram. Assume the empty string is an isogram. 
//  Ignore letter case.
// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

export function isIsogram(str: string): boolean {
  const lowerStr = str.toLowerCase();
  const seen = new Set<string>();

  for (const char of lowerStr) {
    if (seen.has(char)) {
      return false; 
    }
    seen.add(char);
  }

  return true; 
}
