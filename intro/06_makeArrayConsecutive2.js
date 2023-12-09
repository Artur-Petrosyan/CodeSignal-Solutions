/**
 * Calculates the number of missing values in an array of consecutive numbers.
 *
 * @param {number[]} statues - The array of consecutive numbers.
 * @returns {number} The number of missing values in the array.
 *
 * @example
 * const missingValues = makeArrayConsecutive2([6, 2, 3, 8]);
 * console.log(missingValues); // Output: 3
 *
 * @example
 * const missingValues = makeArrayConsecutive2([1, 2, 3]);
 * console.log(missingValues); // Output: 0
 *
 * @example
 * const missingValues = makeArrayConsecutive2([1, 2, 4]);
 * console.log(missingValues); // Output: 2
 */
const makeArrayConsecutive2 = (statues) => {
    const min = Math.min(...statues);
    const max = Math.max(...statues);

    const range = max - min - 1;

    const missingValues = range - (statues.length - 2);

    return Math.max(0, missingValues);
}