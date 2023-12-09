/**
 * Calculates the opposite number on a circle of given size.
 *
 * @param {number} n - The size of the circle.
 * @param {number} firstNumber - The starting number on the circle.
 * @returns {number} - Returns the opposite number on the circle.
 *
 * @example
 * // Returns 3 because 3 is opposite to 6 on a circle of size 7.
 * const result1 = circleOfNumbers(7, 6);
 *
 * @example
 * // Returns 2 because 2 is opposite to 7 on a circle of size 9.
 * const result2 = circleOfNumbers(9, 7);
 *
 * @example
 * // Returns 0 because 0 is opposite to 5 on a circle of size 10.
 * const result3 = circleOfNumbers(10, 5);
 *
 * @example
 * // Returns 4 because 4 is opposite to 9 on a circle of size 5.
 * const result4 = circleOfNumbers(5, 9);
 */
function circleOfNumbers(n, firstNumber) {
    return (n / 2 + firstNumber) % n;
}
