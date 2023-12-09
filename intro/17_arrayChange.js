/**
 * Calculates the minimum number of operations needed to make all elements in an array equal or greater than a given integer.
 * An operation involves incrementing a value by 1.
 *
 * @param {number[]} inputArray - An array of numbers.
 * @returns {number} - The minimum number of operations needed to make all elements in the array equal or greater than a given integer.
 *
 * @example
 * arrayChange([1, 1, 1]); // 0
 * arrayChange([1, 1, 2]); // 2
 * arrayChange([1, 5, 20]); // 3
 * arrayChange([1, 5, 10]); // 1
 * arrayChange([1, 5, 100]); // 11
 */
const arrayChange = (inputArray) => {
    let count = 0;

    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i - 1]) {
            const difference = inputArray[i - 1] - inputArray[i] + 1;
            inputArray[i] += difference;
            count += difference;
        }
    }
    return count;
}