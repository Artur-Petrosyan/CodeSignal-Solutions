/**
 * Deletes a digit from a given number to maximize the resulting number.
 *
 * @param {number} n - The input number from which a digit will be deleted.
 * @returns {number} - Returns the maximum number obtained after deleting a digit.
 *
 * @example
 * // Returns 523 because deleting the digit "1" results in the maximum number.
 * const result1 = deleteDigit(1523);
 *
 * @example
 * // Returns 91 because deleting the digit "0" results in the maximum number.
 * const result2 = deleteDigit(901);
 *
 * @example
 * // Returns 876 because deleting the digit "5" results in the maximum number.
 * const result3 = deleteDigit(8576);
 *
 * @example
 * // Returns 987 because deleting the digit "6" results in the maximum number.
 * const result4 = deleteDigit(9768);
 */
const deleteDigit = (n) => {
    let strArr = String(n).split('').map(Number);

    return Math.max(
        ...strArr.map((el, i) => {
            let r = strArr.slice();
            r.splice(i, 1);
            return Number(r.join(''));
        })
    );
};
