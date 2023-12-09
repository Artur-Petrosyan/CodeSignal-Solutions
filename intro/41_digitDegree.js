/**
 * Calculates the digit degree of a given number, which is the number of times the digits
 * need to be summed until a single-digit number is obtained.
 *
 * @param {number} n - The input number for which to calculate the digit degree.
 * @returns {number} - Returns the digit degree of the input number.
 *
 * @example
 * // Returns 0 because the digit degree of 9 is 0 (a single-digit number).
 * const result1 = digitDegree(9);
 *
 * @example
 * // Returns 1 because the digit degree of 56 is 1 (5 + 6 = 11, and 1 + 1 = 2, a single-digit number).
 * const result2 = digitDegree(56);
 *
 * @example
 * // Returns 2 because the digit degree of 8765 is 2 (8 + 7 + 6 + 5 = 26, and 2 + 6 = 8, a single-digit number).
 * const result3 = digitDegree(8765);
 *
 * @example
 * // Returns 0 because the digit degree of 0 is 0 (a single-digit number).
 * const result4 = digitDegree(0);
 */
const digitDegree = (n) => {
    if (n < 10) {
        return 0;
    }
    return 1 + digitDegree(Number(String(n).split('').map(Number).reduce((a, b) => a + b)));
};
