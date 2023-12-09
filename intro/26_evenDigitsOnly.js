/**
 * Checks if all digits in a given number are even.
 *
 * @param {number} n - The number to be checked.
 * @returns {boolean} - Returns true if all digits are even, otherwise false.
 *
 * @example
 * // Returns true because all digits (2, 4, 6, 8) are even.
 * const result1 = evenDigitsOnly(2468);
 *
 * @example
 * // Returns false because the digit 5 is not even.
 * const result2 = evenDigitsOnly(12345);
 *
 * @example
 * // Returns true for zero because there are no digits.
 * const result3 = evenDigitsOnly(0);
 *
 * @example
 * // Returns false because the digit 1 is not even.
 * const result4 = evenDigitsOnly(101);
 */
const evenDigitsOnly = (n) => {
    let res = String(n).split('');
    for (let i = 0; i < res.length; i++) {
        if (res[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
};
