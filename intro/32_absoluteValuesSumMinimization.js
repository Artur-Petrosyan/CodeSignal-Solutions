/**
 * Finds the element in the array for which the sum of absolute differences
 * with all other elements is minimized.
 *
 * @param {number[]} a - The array of numbers.
 * @returns {number} - Returns the element for which the sum of absolute differences is minimized.
 *
 * @example
 * // Returns 4 because the sum of absolute differences for each element is [5, 1, 3, 2],
 * // and it is minimized for the element 4.
 * const result1 = absoluteValuesSumMinimization([1, 2, 3, 4, 5]);
 *
 * @example
 * // Returns 7 because the sum of absolute differences for each element is [2, 3, 1, 5, 6],
 * // and it is minimized for the element 7.
 * const result2 = absoluteValuesSumMinimization([1, 4, 6, 8, 10]);
 */
function absoluteValuesSumMinimization(a) {
    let sum = a.map(i => distanceCalculator(a, i));
    let sumMin = Math.min(...sum);

    return a[sum.indexOf(sumMin)];
}

/**
 * Calculates the sum of absolute differences between a value and all elements in an array.
 *
 * @param {number[]} a - The array of numbers.
 * @param {number} val - The value to calculate the absolute differences from.
 * @returns {number} - Returns the sum of absolute differences.
 */
function distanceCalculator(a, val) {
    return a.map(i => Math.abs(i - val)).reduce((sum, num) => sum + num, 0);
}

