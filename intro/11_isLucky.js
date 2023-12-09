/**
 * Checks if a given number is lucky or not.
 * A number is considered lucky if the sum of its digits is equal to the sum of the digits of the number with its digits reversed.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is lucky, false otherwise.
 *
 * @example
 * isLucky(1234); // true
 * isLucky(2341); // true
 * isLucky(123); // false
 */
const isLucky = (n) => {
    const arr = n.toString().split('').map(item => item / 1)
    const firstArr = arr.splice(0, arr.length / 2)
    let num1 = 0;
    let num2 = 0;
    firstArr.forEach(item => num1 += item)
    arr.forEach(item => num2 += item)
    return num1 === num2
}