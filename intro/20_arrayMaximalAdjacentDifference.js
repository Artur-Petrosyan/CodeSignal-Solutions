/**
 * Calculates the maximum absolute difference between any two adjacent elements in an array.
 *
 * @param {number[]} inputArray - An array of numbers.
 * @returns {number} - The maximum absolute difference between any two adjacent elements in the array.
 *
 * @example
 * arrayMaximalAdjacentDifference([2, 4, 1, 0]); // 3
 * arrayMaximalAdjacentDifference([1, 1, 1, 1]); // 0
 * arrayMaximalAdjacentDifference([2, 4, 1, 0, 3]); // 3
 * arrayMaximalAdjacentDifference([2, 4, 1, 0, 3, 5]); // 3
 * arrayMaximalAdjacentDifference([2, 4, 1, 0, 3, 5, 6]); // 4
 */
const arrayMaximalAdjacentDifference = (inputArray) => {
    let max = Math.abs(inputArray[1] - inputArray[0]);
    for(let i=2; i < inputArray.length; i++) {
        if(Math.abs(inputArray[i] - inputArray[i-1]) > max) {
            max = Math.abs(inputArray[i] - inputArray[i-1]);
        }
    }
    return max
}