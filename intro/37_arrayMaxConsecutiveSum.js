/**
 * Finds the maximum sum of k consecutive elements in the given array.
 *
 * @param {number[]} inputArray - The input array of numbers.
 * @param {number} k - The number of consecutive elements to consider.
 * @returns {number} - Returns the maximum sum of k consecutive elements.
 *
 * @example
 * // Returns 9 as the maximum sum of 2 consecutive elements (3 + 6) in the array [1, 3, 6, 2, 2].
 * const result1 = arrayMaxConsecutiveSum([1, 3, 6, 2, 2], 2);
 *
 * @example
 * // Returns 18 as the maximum sum of 3 consecutive elements (4 + 6 + 8) in the array [4, 6, 8, 2, 10, 1].
 * const result2 = arrayMaxConsecutiveSum([4, 6, 8, 2, 10, 1], 3);
 *
 * @example
 * // Returns 0 as the maximum sum of 1 consecutive element (0) in the array [0, -1, -2, -3, 0].
 * const result3 = arrayMaxConsecutiveSum([0, -1, -2, -3, 0], 1);
 */
const arrayMaxConsecutiveSum = (inputArray, k) => {
    let max = inputArray.slice(0, k).reduce((a, b) => a + b);
    let cur = max;

    for (let i = k; i < inputArray.length; i++) {
        cur = cur + inputArray[i] - inputArray[i - k];

        if (cur > max)
            max = cur;
    }

    return max;
};
