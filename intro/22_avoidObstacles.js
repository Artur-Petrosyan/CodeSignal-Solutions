/**
 * Calculates the smallest positive integer that is not present in the input array.
 * @param {number[]} inputArray - An array of integers.
 * @returns {number} - The smallest positive integer that is not present in the input array.
 * @example
 * const result = avoidObstacles([2, 3, 5]);
 * console.log(result); // Output: 4
 * @example
 * const result = avoidObstacles([2, 4, 6]);
 * console.log(result); // Output: 7
 */
const avoidObstacles = (inputArray) => {
    let max = Math.max(...inputArray);
    for (let i = 1; i < max; i++) {
        let divs = inputArray.some(x => x % i === 0);
        if (!divs) return i;
    }
    return max + 1;
};