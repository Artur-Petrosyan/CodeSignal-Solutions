/**
 * Finds and returns the first digit in the input string.
 *
 * @param {string} inputString - The input string to search for the first digit.
 * @returns {string|null} - Returns the first digit if found, or null if no digit is present.
 *
 * @example
 * // Returns "5" as it is the first digit in the string "abc123".
 * const result1 = firstDigit("abc123");
 *
 * @example
 * // Returns "2" as it is the first digit in the string "def456".
 * const result2 = firstDigit("def456");
 *
 * @example
 * // Returns null because there are no digits in the string "xyz".
 * const result3 = firstDigit("xyz");
 *
 * @example
 * // Returns "1" as it is the first digit in the string "1a2b3c".
 * const result4 = firstDigit("1a2b3c");
 */
const firstDigit = inputString => inputString[inputString.search(/\d/)];


