/* 
TypeScript: Palindrome Permutation Checker In a coding challenge, participants are given a string of characters 
and are tasked with determining whether any permutation of it can form a palindrome using Object-Oriented Programming (OOP) principles. 
A palindrome is a word or phrase that reads the same forwards and backward, ignoring spaces, and capitalization. 
A permutation is a rearrangement of the string. 
Implement methods that determine whether a palindrome can be formed from a string s. 

Return the boolean true if it is possible to rearrange the characters of sto form a palindrome, and false otherwise. 

Example String = 'Level' 
The method stringTransform() of an instance of PalindromeChecker initialized with s should return 'level'. 
The method palindromeChecker() should then return true because one of the permutations of level' is level, which is a palindrome. 

Function Description (string Transform): string - This method takes no parameters. 
It removes spaces, converts all characters to lowercase, and returns the result as the string cleanedString.

palindromeChecker(cleanedString: string): boolean - This method takes in one parameter: cleanedString. 
It returns a boolean value true if any permutation of the cleanedString can form a palindrome, and false otherwise.
*/

class PalindromeChecker {
  private s: string

  constructor(s: string) {
    this.s = s
  }

  // Method to transform the string: remove spaces, convert to lowercase
  stringTransform(): string {
    return this.s.replace(/\s+/g, '').toLowerCase()
  }

  // Method to check if any permutation can form a palindrome
  palindromeChecker(cleanedString: string): boolean {
    const charCounts = new Map<string, number>()
    for (const char of cleanedString) {
      charCounts.set(char, (charCounts.get(char) || 0) + 1)
    }

    let oddCount = 0
    for (const count of charCounts.values()) {
      if (count % 2 !== 0) {
        oddCount++
      }
      // In a palindrome, there can be at most one character that has an odd count
      if (oddCount > 1) {
        return false
      }
    }
    return true
  }
}

// Test the class
const checker = new PalindromeChecker('Level')
const cleanedString = checker.stringTransform()
const isPalindromePermutation = checker.palindromeChecker(cleanedString)
console.log(isPalindromePermutation) // Should log true
