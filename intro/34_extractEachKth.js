/**
 * Extracts every kth element from the input array.
 *
 * @param {number[]} inputArray - The array from which elements are to be extracted.
 * @param {number} k - The interval for extracting elements (every kth element).
 * @returns {number[]} - Returns a new array with every kth element removed.
 *
 * @example
 * // Returns [1, 2, 4, 5] by extracting every 3rd element (3 and 6) from the original array.
 * const result1 = extractEachKth([1, 2, 3, 4, 5, 6], 3);
 *
 * @example
 * // Returns [2, 4, 6, 8, 10] by extracting every 2nd element (1, 3, 5, 7, 9) from the original array.
 * const result2 = extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *
 * @example
 * // Returns [1, 2, 3, 4, 5, 6] because k is 7, and there are no elements to extract.
 * const result3 = extractEachKth([1, 2, 3, 4, 5, 6], 7);
 */
const extractEachKth = (inputArray, k) => {
    return inputArray.filter((el, i) => (i + 1) % k !== 0);
};
